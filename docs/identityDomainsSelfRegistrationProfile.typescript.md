# `identityDomainsSelfRegistrationProfile` Submodule <a name="`identityDomainsSelfRegistrationProfile` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsSelfRegistrationProfile <a name="IdentityDomainsSelfRegistrationProfile" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile oci_identity_domains_self_registration_profile}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile(scope: Construct, id: string, config: IdentityDomainsSelfRegistrationProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig">IdentityDomainsSelfRegistrationProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig">IdentityDomainsSelfRegistrationProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putAfterSubmitText">putAfterSubmitText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putConsentText">putConsentText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putDefaultGroups">putDefaultGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putDisplayName">putDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putEmailTemplate">putEmailTemplate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putFooterText">putFooterText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putHeaderText">putHeaderText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putTags">putTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putUserAttributes">putUserAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAfterSubmitText">resetAfterSubmitText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAllowedEmailDomains">resetAllowedEmailDomains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetConsentText">resetConsentText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetDefaultGroups">resetDefaultGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetDisallowedEmailDomains">resetDisallowedEmailDomains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetFooterLogo">resetFooterLogo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetFooterText">resetFooterText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetHeaderLogo">resetHeaderLogo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetHeaderText">resetHeaderText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetOcid">resetOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetUserAttributes">resetUserAttributes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAfterSubmitText` <a name="putAfterSubmitText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putAfterSubmitText"></a>

```typescript
public putAfterSubmitText(value: IResolvable | IdentityDomainsSelfRegistrationProfileAfterSubmitText[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putAfterSubmitText.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText">IdentityDomainsSelfRegistrationProfileAfterSubmitText</a>[]

---

##### `putConsentText` <a name="putConsentText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putConsentText"></a>

```typescript
public putConsentText(value: IResolvable | IdentityDomainsSelfRegistrationProfileConsentText[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putConsentText.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText">IdentityDomainsSelfRegistrationProfileConsentText</a>[]

---

##### `putDefaultGroups` <a name="putDefaultGroups" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putDefaultGroups"></a>

```typescript
public putDefaultGroups(value: IResolvable | IdentityDomainsSelfRegistrationProfileDefaultGroups[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putDefaultGroups.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups">IdentityDomainsSelfRegistrationProfileDefaultGroups</a>[]

---

##### `putDisplayName` <a name="putDisplayName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putDisplayName"></a>

```typescript
public putDisplayName(value: IResolvable | IdentityDomainsSelfRegistrationProfileDisplayName[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putDisplayName.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName">IdentityDomainsSelfRegistrationProfileDisplayName</a>[]

---

##### `putEmailTemplate` <a name="putEmailTemplate" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putEmailTemplate"></a>

```typescript
public putEmailTemplate(value: IdentityDomainsSelfRegistrationProfileEmailTemplate): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putEmailTemplate.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate">IdentityDomainsSelfRegistrationProfileEmailTemplate</a>

---

##### `putFooterText` <a name="putFooterText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putFooterText"></a>

```typescript
public putFooterText(value: IResolvable | IdentityDomainsSelfRegistrationProfileFooterText[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putFooterText.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText">IdentityDomainsSelfRegistrationProfileFooterText</a>[]

---

##### `putHeaderText` <a name="putHeaderText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putHeaderText"></a>

```typescript
public putHeaderText(value: IResolvable | IdentityDomainsSelfRegistrationProfileHeaderText[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putHeaderText.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText">IdentityDomainsSelfRegistrationProfileHeaderText</a>[]

---

##### `putTags` <a name="putTags" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putTags"></a>

```typescript
public putTags(value: IResolvable | IdentityDomainsSelfRegistrationProfileTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags">IdentityDomainsSelfRegistrationProfileTags</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putTimeouts"></a>

```typescript
public putTimeouts(value: IdentityDomainsSelfRegistrationProfileTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts">IdentityDomainsSelfRegistrationProfileTimeouts</a>

---

##### `putUserAttributes` <a name="putUserAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putUserAttributes"></a>

```typescript
public putUserAttributes(value: IResolvable | IdentityDomainsSelfRegistrationProfileUserAttributes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putUserAttributes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes">IdentityDomainsSelfRegistrationProfileUserAttributes</a>[]

---

##### `resetActive` <a name="resetActive" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetActive"></a>

```typescript
public resetActive(): void
```

##### `resetAfterSubmitText` <a name="resetAfterSubmitText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAfterSubmitText"></a>

```typescript
public resetAfterSubmitText(): void
```

##### `resetAllowedEmailDomains` <a name="resetAllowedEmailDomains" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAllowedEmailDomains"></a>

```typescript
public resetAllowedEmailDomains(): void
```

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAttributeSets"></a>

```typescript
public resetAttributeSets(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetConsentText` <a name="resetConsentText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetConsentText"></a>

```typescript
public resetConsentText(): void
```

##### `resetDefaultGroups` <a name="resetDefaultGroups" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetDefaultGroups"></a>

```typescript
public resetDefaultGroups(): void
```

##### `resetDisallowedEmailDomains` <a name="resetDisallowedEmailDomains" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetDisallowedEmailDomains"></a>

```typescript
public resetDisallowedEmailDomains(): void
```

##### `resetExternalId` <a name="resetExternalId" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetExternalId"></a>

```typescript
public resetExternalId(): void
```

##### `resetFooterLogo` <a name="resetFooterLogo" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetFooterLogo"></a>

```typescript
public resetFooterLogo(): void
```

##### `resetFooterText` <a name="resetFooterText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetFooterText"></a>

```typescript
public resetFooterText(): void
```

##### `resetHeaderLogo` <a name="resetHeaderLogo" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetHeaderLogo"></a>

```typescript
public resetHeaderLogo(): void
```

##### `resetHeaderText` <a name="resetHeaderText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetHeaderText"></a>

```typescript
public resetHeaderText(): void
```

##### `resetOcid` <a name="resetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetOcid"></a>

```typescript
public resetOcid(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

##### `resetTags` <a name="resetTags" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserAttributes` <a name="resetUserAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetUserAttributes"></a>

```typescript
public resetUserAttributes(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityDomainsSelfRegistrationProfile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isConstruct"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isTerraformElement"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isTerraformResource"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.generateConfigForImport"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IdentityDomainsSelfRegistrationProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityDomainsSelfRegistrationProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityDomainsSelfRegistrationProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsSelfRegistrationProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.afterSubmitText">afterSubmitText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList">IdentityDomainsSelfRegistrationProfileAfterSubmitTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.consentText">consentText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList">IdentityDomainsSelfRegistrationProfileConsentTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.defaultGroups">defaultGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList">IdentityDomainsSelfRegistrationProfileDefaultGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.displayName">displayName</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList">IdentityDomainsSelfRegistrationProfileDisplayNameList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.emailTemplate">emailTemplate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference">IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.footerText">footerText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList">IdentityDomainsSelfRegistrationProfileFooterTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.headerText">headerText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList">IdentityDomainsSelfRegistrationProfileHeaderTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList">IdentityDomainsSelfRegistrationProfileIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList">IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList">IdentityDomainsSelfRegistrationProfileMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList">IdentityDomainsSelfRegistrationProfileTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference">IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.userAttributes">userAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList">IdentityDomainsSelfRegistrationProfileUserAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.activationEmailRequiredInput">activationEmailRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.activeInput">activeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.afterSubmitTextInput">afterSubmitTextInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText">IdentityDomainsSelfRegistrationProfileAfterSubmitText</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.allowedEmailDomainsInput">allowedEmailDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.attributeSetsInput">attributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.attributesInput">attributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.consentTextInput">consentTextInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText">IdentityDomainsSelfRegistrationProfileConsentText</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.consentTextPresentInput">consentTextPresentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.defaultGroupsInput">defaultGroupsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups">IdentityDomainsSelfRegistrationProfileDefaultGroups</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.disallowedEmailDomainsInput">disallowedEmailDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.displayNameInput">displayNameInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName">IdentityDomainsSelfRegistrationProfileDisplayName</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.emailTemplateInput">emailTemplateInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate">IdentityDomainsSelfRegistrationProfileEmailTemplate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.footerLogoInput">footerLogoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.footerTextInput">footerTextInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText">IdentityDomainsSelfRegistrationProfileFooterText</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.headerLogoInput">headerLogoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.headerTextInput">headerTextInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText">IdentityDomainsSelfRegistrationProfileHeaderText</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.numberOfDaysRedirectUrlIsValidInput">numberOfDaysRedirectUrlIsValidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.ocidInput">ocidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.redirectUrlInput">redirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.schemasInput">schemasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.showOnLoginPageInput">showOnLoginPageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.tagsInput">tagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags">IdentityDomainsSelfRegistrationProfileTags</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts">IdentityDomainsSelfRegistrationProfileTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.userAttributesInput">userAttributesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes">IdentityDomainsSelfRegistrationProfileUserAttributes</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.activationEmailRequired">activationEmailRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.active">active</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.allowedEmailDomains">allowedEmailDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.consentTextPresent">consentTextPresent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.disallowedEmailDomains">disallowedEmailDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.footerLogo">footerLogo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.headerLogo">headerLogo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.numberOfDaysRedirectUrlIsValid">numberOfDaysRedirectUrlIsValid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.redirectUrl">redirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.showOnLoginPage">showOnLoginPage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `afterSubmitText`<sup>Required</sup> <a name="afterSubmitText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.afterSubmitText"></a>

```typescript
public readonly afterSubmitText: IdentityDomainsSelfRegistrationProfileAfterSubmitTextList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList">IdentityDomainsSelfRegistrationProfileAfterSubmitTextList</a>

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `consentText`<sup>Required</sup> <a name="consentText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.consentText"></a>

```typescript
public readonly consentText: IdentityDomainsSelfRegistrationProfileConsentTextList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList">IdentityDomainsSelfRegistrationProfileConsentTextList</a>

---

##### `defaultGroups`<sup>Required</sup> <a name="defaultGroups" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.defaultGroups"></a>

```typescript
public readonly defaultGroups: IdentityDomainsSelfRegistrationProfileDefaultGroupsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList">IdentityDomainsSelfRegistrationProfileDefaultGroupsList</a>

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.displayName"></a>

```typescript
public readonly displayName: IdentityDomainsSelfRegistrationProfileDisplayNameList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList">IdentityDomainsSelfRegistrationProfileDisplayNameList</a>

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `emailTemplate`<sup>Required</sup> <a name="emailTemplate" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.emailTemplate"></a>

```typescript
public readonly emailTemplate: IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference">IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference</a>

---

##### `footerText`<sup>Required</sup> <a name="footerText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.footerText"></a>

```typescript
public readonly footerText: IdentityDomainsSelfRegistrationProfileFooterTextList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList">IdentityDomainsSelfRegistrationProfileFooterTextList</a>

---

##### `headerText`<sup>Required</sup> <a name="headerText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.headerText"></a>

```typescript
public readonly headerText: IdentityDomainsSelfRegistrationProfileHeaderTextList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList">IdentityDomainsSelfRegistrationProfileHeaderTextList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: IdentityDomainsSelfRegistrationProfileIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList">IdentityDomainsSelfRegistrationProfileIdcsCreatedByList</a>

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList">IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.meta"></a>

```typescript
public readonly meta: IdentityDomainsSelfRegistrationProfileMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList">IdentityDomainsSelfRegistrationProfileMetaList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.tags"></a>

```typescript
public readonly tags: IdentityDomainsSelfRegistrationProfileTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList">IdentityDomainsSelfRegistrationProfileTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.timeouts"></a>

```typescript
public readonly timeouts: IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference">IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference</a>

---

##### `userAttributes`<sup>Required</sup> <a name="userAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.userAttributes"></a>

```typescript
public readonly userAttributes: IdentityDomainsSelfRegistrationProfileUserAttributesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList">IdentityDomainsSelfRegistrationProfileUserAttributesList</a>

---

##### `activationEmailRequiredInput`<sup>Optional</sup> <a name="activationEmailRequiredInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.activationEmailRequiredInput"></a>

```typescript
public readonly activationEmailRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.activeInput"></a>

```typescript
public readonly activeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `afterSubmitTextInput`<sup>Optional</sup> <a name="afterSubmitTextInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.afterSubmitTextInput"></a>

```typescript
public readonly afterSubmitTextInput: IResolvable | IdentityDomainsSelfRegistrationProfileAfterSubmitText[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText">IdentityDomainsSelfRegistrationProfileAfterSubmitText</a>[]

---

##### `allowedEmailDomainsInput`<sup>Optional</sup> <a name="allowedEmailDomainsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.allowedEmailDomainsInput"></a>

```typescript
public readonly allowedEmailDomainsInput: string[];
```

- *Type:* string[]

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.attributeSetsInput"></a>

```typescript
public readonly attributeSetsInput: string[];
```

- *Type:* string[]

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.attributesInput"></a>

```typescript
public readonly attributesInput: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `consentTextInput`<sup>Optional</sup> <a name="consentTextInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.consentTextInput"></a>

```typescript
public readonly consentTextInput: IResolvable | IdentityDomainsSelfRegistrationProfileConsentText[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText">IdentityDomainsSelfRegistrationProfileConsentText</a>[]

---

##### `consentTextPresentInput`<sup>Optional</sup> <a name="consentTextPresentInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.consentTextPresentInput"></a>

```typescript
public readonly consentTextPresentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defaultGroupsInput`<sup>Optional</sup> <a name="defaultGroupsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.defaultGroupsInput"></a>

```typescript
public readonly defaultGroupsInput: IResolvable | IdentityDomainsSelfRegistrationProfileDefaultGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups">IdentityDomainsSelfRegistrationProfileDefaultGroups</a>[]

---

##### `disallowedEmailDomainsInput`<sup>Optional</sup> <a name="disallowedEmailDomainsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.disallowedEmailDomainsInput"></a>

```typescript
public readonly disallowedEmailDomainsInput: string[];
```

- *Type:* string[]

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: IResolvable | IdentityDomainsSelfRegistrationProfileDisplayName[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName">IdentityDomainsSelfRegistrationProfileDisplayName</a>[]

---

##### `emailTemplateInput`<sup>Optional</sup> <a name="emailTemplateInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.emailTemplateInput"></a>

```typescript
public readonly emailTemplateInput: IdentityDomainsSelfRegistrationProfileEmailTemplate;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate">IdentityDomainsSelfRegistrationProfileEmailTemplate</a>

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `footerLogoInput`<sup>Optional</sup> <a name="footerLogoInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.footerLogoInput"></a>

```typescript
public readonly footerLogoInput: string;
```

- *Type:* string

---

##### `footerTextInput`<sup>Optional</sup> <a name="footerTextInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.footerTextInput"></a>

```typescript
public readonly footerTextInput: IResolvable | IdentityDomainsSelfRegistrationProfileFooterText[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText">IdentityDomainsSelfRegistrationProfileFooterText</a>[]

---

##### `headerLogoInput`<sup>Optional</sup> <a name="headerLogoInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.headerLogoInput"></a>

```typescript
public readonly headerLogoInput: string;
```

- *Type:* string

---

##### `headerTextInput`<sup>Optional</sup> <a name="headerTextInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.headerTextInput"></a>

```typescript
public readonly headerTextInput: IResolvable | IdentityDomainsSelfRegistrationProfileHeaderText[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText">IdentityDomainsSelfRegistrationProfileHeaderText</a>[]

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `numberOfDaysRedirectUrlIsValidInput`<sup>Optional</sup> <a name="numberOfDaysRedirectUrlIsValidInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.numberOfDaysRedirectUrlIsValidInput"></a>

```typescript
public readonly numberOfDaysRedirectUrlIsValidInput: number;
```

- *Type:* number

---

##### `ocidInput`<sup>Optional</sup> <a name="ocidInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.ocidInput"></a>

```typescript
public readonly ocidInput: string;
```

- *Type:* string

---

##### `redirectUrlInput`<sup>Optional</sup> <a name="redirectUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.redirectUrlInput"></a>

```typescript
public readonly redirectUrlInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `schemasInput`<sup>Optional</sup> <a name="schemasInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.schemasInput"></a>

```typescript
public readonly schemasInput: string[];
```

- *Type:* string[]

---

##### `showOnLoginPageInput`<sup>Optional</sup> <a name="showOnLoginPageInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.showOnLoginPageInput"></a>

```typescript
public readonly showOnLoginPageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IdentityDomainsSelfRegistrationProfileTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags">IdentityDomainsSelfRegistrationProfileTags</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IdentityDomainsSelfRegistrationProfileTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts">IdentityDomainsSelfRegistrationProfileTimeouts</a>

---

##### `userAttributesInput`<sup>Optional</sup> <a name="userAttributesInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.userAttributesInput"></a>

```typescript
public readonly userAttributesInput: IResolvable | IdentityDomainsSelfRegistrationProfileUserAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes">IdentityDomainsSelfRegistrationProfileUserAttributes</a>[]

---

##### `activationEmailRequired`<sup>Required</sup> <a name="activationEmailRequired" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.activationEmailRequired"></a>

```typescript
public readonly activationEmailRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `active`<sup>Required</sup> <a name="active" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedEmailDomains`<sup>Required</sup> <a name="allowedEmailDomains" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.allowedEmailDomains"></a>

```typescript
public readonly allowedEmailDomains: string[];
```

- *Type:* string[]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `consentTextPresent`<sup>Required</sup> <a name="consentTextPresent" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.consentTextPresent"></a>

```typescript
public readonly consentTextPresent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disallowedEmailDomains`<sup>Required</sup> <a name="disallowedEmailDomains" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.disallowedEmailDomains"></a>

```typescript
public readonly disallowedEmailDomains: string[];
```

- *Type:* string[]

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `footerLogo`<sup>Required</sup> <a name="footerLogo" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.footerLogo"></a>

```typescript
public readonly footerLogo: string;
```

- *Type:* string

---

##### `headerLogo`<sup>Required</sup> <a name="headerLogo" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.headerLogo"></a>

```typescript
public readonly headerLogo: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `numberOfDaysRedirectUrlIsValid`<sup>Required</sup> <a name="numberOfDaysRedirectUrlIsValid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.numberOfDaysRedirectUrlIsValid"></a>

```typescript
public readonly numberOfDaysRedirectUrlIsValid: number;
```

- *Type:* number

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `redirectUrl`<sup>Required</sup> <a name="redirectUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.redirectUrl"></a>

```typescript
public readonly redirectUrl: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `showOnLoginPage`<sup>Required</sup> <a name="showOnLoginPage" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.showOnLoginPage"></a>

```typescript
public readonly showOnLoginPage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsSelfRegistrationProfileAfterSubmitText <a name="IdentityDomainsSelfRegistrationProfileAfterSubmitText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSelfRegistrationProfileAfterSubmitText: identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText.property.locale">locale</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText.property.default">default</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}. |

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

##### `default`<sup>Optional</sup> <a name="default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText.property.default"></a>

```typescript
public readonly default: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}.

---

### IdentityDomainsSelfRegistrationProfileConfig <a name="IdentityDomainsSelfRegistrationProfileConfig" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSelfRegistrationProfileConfig: identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.activationEmailRequired">activationEmailRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#activation_email_required IdentityDomainsSelfRegistrationProfile#activation_email_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.consentTextPresent">consentTextPresent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#consent_text_present IdentityDomainsSelfRegistrationProfile#consent_text_present}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.displayName">displayName</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName">IdentityDomainsSelfRegistrationProfileDisplayName</a>[]</code> | display_name block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.emailTemplate">emailTemplate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate">IdentityDomainsSelfRegistrationProfileEmailTemplate</a></code> | email_template block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#idcs_endpoint IdentityDomainsSelfRegistrationProfile#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#name IdentityDomainsSelfRegistrationProfile#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.numberOfDaysRedirectUrlIsValid">numberOfDaysRedirectUrlIsValid</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#number_of_days_redirect_url_is_valid IdentityDomainsSelfRegistrationProfile#number_of_days_redirect_url_is_valid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.redirectUrl">redirectUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#redirect_url IdentityDomainsSelfRegistrationProfile#redirect_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.schemas">schemas</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#schemas IdentityDomainsSelfRegistrationProfile#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.showOnLoginPage">showOnLoginPage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#show_on_login_page IdentityDomainsSelfRegistrationProfile#show_on_login_page}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.active">active</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#active IdentityDomainsSelfRegistrationProfile#active}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.afterSubmitText">afterSubmitText</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText">IdentityDomainsSelfRegistrationProfileAfterSubmitText</a>[]</code> | after_submit_text block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.allowedEmailDomains">allowedEmailDomains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#allowed_email_domains IdentityDomainsSelfRegistrationProfile#allowed_email_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.attributes">attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#attributes IdentityDomainsSelfRegistrationProfile#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#attribute_sets IdentityDomainsSelfRegistrationProfile#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#authorization IdentityDomainsSelfRegistrationProfile#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.consentText">consentText</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText">IdentityDomainsSelfRegistrationProfileConsentText</a>[]</code> | consent_text block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.defaultGroups">defaultGroups</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups">IdentityDomainsSelfRegistrationProfileDefaultGroups</a>[]</code> | default_groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.disallowedEmailDomains">disallowedEmailDomains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#disallowed_email_domains IdentityDomainsSelfRegistrationProfile#disallowed_email_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.externalId">externalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#external_id IdentityDomainsSelfRegistrationProfile#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.footerLogo">footerLogo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#footer_logo IdentityDomainsSelfRegistrationProfile#footer_logo}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.footerText">footerText</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText">IdentityDomainsSelfRegistrationProfileFooterText</a>[]</code> | footer_text block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.headerLogo">headerLogo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#header_logo IdentityDomainsSelfRegistrationProfile#header_logo}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.headerText">headerText</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText">IdentityDomainsSelfRegistrationProfileHeaderText</a>[]</code> | header_text block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.ocid">ocid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#ocid IdentityDomainsSelfRegistrationProfile#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#resource_type_schema_version IdentityDomainsSelfRegistrationProfile#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.tags">tags</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags">IdentityDomainsSelfRegistrationProfileTags</a>[]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts">IdentityDomainsSelfRegistrationProfileTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.userAttributes">userAttributes</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes">IdentityDomainsSelfRegistrationProfileUserAttributes</a>[]</code> | user_attributes block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `activationEmailRequired`<sup>Required</sup> <a name="activationEmailRequired" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.activationEmailRequired"></a>

```typescript
public readonly activationEmailRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#activation_email_required IdentityDomainsSelfRegistrationProfile#activation_email_required}.

---

##### `consentTextPresent`<sup>Required</sup> <a name="consentTextPresent" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.consentTextPresent"></a>

```typescript
public readonly consentTextPresent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#consent_text_present IdentityDomainsSelfRegistrationProfile#consent_text_present}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.displayName"></a>

```typescript
public readonly displayName: IResolvable | IdentityDomainsSelfRegistrationProfileDisplayName[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName">IdentityDomainsSelfRegistrationProfileDisplayName</a>[]

display_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#display_name IdentityDomainsSelfRegistrationProfile#display_name}

---

##### `emailTemplate`<sup>Required</sup> <a name="emailTemplate" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.emailTemplate"></a>

```typescript
public readonly emailTemplate: IdentityDomainsSelfRegistrationProfileEmailTemplate;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate">IdentityDomainsSelfRegistrationProfileEmailTemplate</a>

email_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#email_template IdentityDomainsSelfRegistrationProfile#email_template}

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#idcs_endpoint IdentityDomainsSelfRegistrationProfile#idcs_endpoint}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#name IdentityDomainsSelfRegistrationProfile#name}.

---

##### `numberOfDaysRedirectUrlIsValid`<sup>Required</sup> <a name="numberOfDaysRedirectUrlIsValid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.numberOfDaysRedirectUrlIsValid"></a>

```typescript
public readonly numberOfDaysRedirectUrlIsValid: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#number_of_days_redirect_url_is_valid IdentityDomainsSelfRegistrationProfile#number_of_days_redirect_url_is_valid}.

---

##### `redirectUrl`<sup>Required</sup> <a name="redirectUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.redirectUrl"></a>

```typescript
public readonly redirectUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#redirect_url IdentityDomainsSelfRegistrationProfile#redirect_url}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#schemas IdentityDomainsSelfRegistrationProfile#schemas}.

---

##### `showOnLoginPage`<sup>Required</sup> <a name="showOnLoginPage" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.showOnLoginPage"></a>

```typescript
public readonly showOnLoginPage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#show_on_login_page IdentityDomainsSelfRegistrationProfile#show_on_login_page}.

---

##### `active`<sup>Optional</sup> <a name="active" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#active IdentityDomainsSelfRegistrationProfile#active}.

---

##### `afterSubmitText`<sup>Optional</sup> <a name="afterSubmitText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.afterSubmitText"></a>

```typescript
public readonly afterSubmitText: IResolvable | IdentityDomainsSelfRegistrationProfileAfterSubmitText[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText">IdentityDomainsSelfRegistrationProfileAfterSubmitText</a>[]

after_submit_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#after_submit_text IdentityDomainsSelfRegistrationProfile#after_submit_text}

---

##### `allowedEmailDomains`<sup>Optional</sup> <a name="allowedEmailDomains" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.allowedEmailDomains"></a>

```typescript
public readonly allowedEmailDomains: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#allowed_email_domains IdentityDomainsSelfRegistrationProfile#allowed_email_domains}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#attributes IdentityDomainsSelfRegistrationProfile#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#attribute_sets IdentityDomainsSelfRegistrationProfile#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#authorization IdentityDomainsSelfRegistrationProfile#authorization}.

---

##### `consentText`<sup>Optional</sup> <a name="consentText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.consentText"></a>

```typescript
public readonly consentText: IResolvable | IdentityDomainsSelfRegistrationProfileConsentText[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText">IdentityDomainsSelfRegistrationProfileConsentText</a>[]

consent_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#consent_text IdentityDomainsSelfRegistrationProfile#consent_text}

---

##### `defaultGroups`<sup>Optional</sup> <a name="defaultGroups" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.defaultGroups"></a>

```typescript
public readonly defaultGroups: IResolvable | IdentityDomainsSelfRegistrationProfileDefaultGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups">IdentityDomainsSelfRegistrationProfileDefaultGroups</a>[]

default_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default_groups IdentityDomainsSelfRegistrationProfile#default_groups}

---

##### `disallowedEmailDomains`<sup>Optional</sup> <a name="disallowedEmailDomains" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.disallowedEmailDomains"></a>

```typescript
public readonly disallowedEmailDomains: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#disallowed_email_domains IdentityDomainsSelfRegistrationProfile#disallowed_email_domains}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#external_id IdentityDomainsSelfRegistrationProfile#external_id}.

---

##### `footerLogo`<sup>Optional</sup> <a name="footerLogo" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.footerLogo"></a>

```typescript
public readonly footerLogo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#footer_logo IdentityDomainsSelfRegistrationProfile#footer_logo}.

---

##### `footerText`<sup>Optional</sup> <a name="footerText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.footerText"></a>

```typescript
public readonly footerText: IResolvable | IdentityDomainsSelfRegistrationProfileFooterText[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText">IdentityDomainsSelfRegistrationProfileFooterText</a>[]

footer_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#footer_text IdentityDomainsSelfRegistrationProfile#footer_text}

---

##### `headerLogo`<sup>Optional</sup> <a name="headerLogo" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.headerLogo"></a>

```typescript
public readonly headerLogo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#header_logo IdentityDomainsSelfRegistrationProfile#header_logo}.

---

##### `headerText`<sup>Optional</sup> <a name="headerText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.headerText"></a>

```typescript
public readonly headerText: IResolvable | IdentityDomainsSelfRegistrationProfileHeaderText[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText">IdentityDomainsSelfRegistrationProfileHeaderText</a>[]

header_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#header_text IdentityDomainsSelfRegistrationProfile#header_text}

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#ocid IdentityDomainsSelfRegistrationProfile#ocid}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#resource_type_schema_version IdentityDomainsSelfRegistrationProfile#resource_type_schema_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IdentityDomainsSelfRegistrationProfileTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags">IdentityDomainsSelfRegistrationProfileTags</a>[]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#tags IdentityDomainsSelfRegistrationProfile#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IdentityDomainsSelfRegistrationProfileTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts">IdentityDomainsSelfRegistrationProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#timeouts IdentityDomainsSelfRegistrationProfile#timeouts}

---

##### `userAttributes`<sup>Optional</sup> <a name="userAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.userAttributes"></a>

```typescript
public readonly userAttributes: IResolvable | IdentityDomainsSelfRegistrationProfileUserAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes">IdentityDomainsSelfRegistrationProfileUserAttributes</a>[]

user_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#user_attributes IdentityDomainsSelfRegistrationProfile#user_attributes}

---

### IdentityDomainsSelfRegistrationProfileConsentText <a name="IdentityDomainsSelfRegistrationProfileConsentText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSelfRegistrationProfileConsentText: identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText.property.locale">locale</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText.property.default">default</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}. |

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

##### `default`<sup>Optional</sup> <a name="default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText.property.default"></a>

```typescript
public readonly default: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}.

---

### IdentityDomainsSelfRegistrationProfileDefaultGroups <a name="IdentityDomainsSelfRegistrationProfileDefaultGroups" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSelfRegistrationProfileDefaultGroups: identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

### IdentityDomainsSelfRegistrationProfileDisplayName <a name="IdentityDomainsSelfRegistrationProfileDisplayName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSelfRegistrationProfileDisplayName: identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName.property.locale">locale</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName.property.default">default</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}. |

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

##### `default`<sup>Optional</sup> <a name="default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName.property.default"></a>

```typescript
public readonly default: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}.

---

### IdentityDomainsSelfRegistrationProfileEmailTemplate <a name="IdentityDomainsSelfRegistrationProfileEmailTemplate" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSelfRegistrationProfileEmailTemplate: identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

### IdentityDomainsSelfRegistrationProfileFooterText <a name="IdentityDomainsSelfRegistrationProfileFooterText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSelfRegistrationProfileFooterText: identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText.property.locale">locale</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText.property.default">default</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}. |

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

##### `default`<sup>Optional</sup> <a name="default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText.property.default"></a>

```typescript
public readonly default: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}.

---

### IdentityDomainsSelfRegistrationProfileHeaderText <a name="IdentityDomainsSelfRegistrationProfileHeaderText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSelfRegistrationProfileHeaderText: identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText.property.locale">locale</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText.property.default">default</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}. |

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

##### `default`<sup>Optional</sup> <a name="default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText.property.default"></a>

```typescript
public readonly default: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}.

---

### IdentityDomainsSelfRegistrationProfileIdcsCreatedBy <a name="IdentityDomainsSelfRegistrationProfileIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedBy.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSelfRegistrationProfileIdcsCreatedBy: identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedBy = { ... }
```


### IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy <a name="IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSelfRegistrationProfileIdcsLastModifiedBy: identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy = { ... }
```


### IdentityDomainsSelfRegistrationProfileMeta <a name="IdentityDomainsSelfRegistrationProfileMeta" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMeta.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSelfRegistrationProfileMeta: identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMeta = { ... }
```


### IdentityDomainsSelfRegistrationProfileTags <a name="IdentityDomainsSelfRegistrationProfileTags" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSelfRegistrationProfileTags: identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#key IdentityDomainsSelfRegistrationProfile#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#key IdentityDomainsSelfRegistrationProfile#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

### IdentityDomainsSelfRegistrationProfileTimeouts <a name="IdentityDomainsSelfRegistrationProfileTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSelfRegistrationProfileTimeouts: identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#create IdentityDomainsSelfRegistrationProfile#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#delete IdentityDomainsSelfRegistrationProfile#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#update IdentityDomainsSelfRegistrationProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#create IdentityDomainsSelfRegistrationProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#delete IdentityDomainsSelfRegistrationProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#update IdentityDomainsSelfRegistrationProfile#update}.

---

### IdentityDomainsSelfRegistrationProfileUserAttributes <a name="IdentityDomainsSelfRegistrationProfileUserAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSelfRegistrationProfileUserAttributes: identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes.property.seqNumber">seqNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#seq_number IdentityDomainsSelfRegistrationProfile#seq_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes.property.fullyQualifiedAttributeName">fullyQualifiedAttributeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#fully_qualified_attribute_name IdentityDomainsSelfRegistrationProfile#fully_qualified_attribute_name}. |

---

##### `seqNumber`<sup>Required</sup> <a name="seqNumber" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes.property.seqNumber"></a>

```typescript
public readonly seqNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#seq_number IdentityDomainsSelfRegistrationProfile#seq_number}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

##### `fullyQualifiedAttributeName`<sup>Optional</sup> <a name="fullyQualifiedAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes.property.fullyQualifiedAttributeName"></a>

```typescript
public readonly fullyQualifiedAttributeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#fully_qualified_attribute_name IdentityDomainsSelfRegistrationProfile#fully_qualified_attribute_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsSelfRegistrationProfileAfterSubmitTextList <a name="IdentityDomainsSelfRegistrationProfileAfterSubmitTextList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.get"></a>

```typescript
public get(index: number): IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText">IdentityDomainsSelfRegistrationProfileAfterSubmitText</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsSelfRegistrationProfileAfterSubmitText[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText">IdentityDomainsSelfRegistrationProfileAfterSubmitText</a>[]

---


### IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference <a name="IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.resetDefault">resetDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.defaultInput">defaultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.localeInput">localeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.default">default</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText">IdentityDomainsSelfRegistrationProfileAfterSubmitText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `localeInput`<sup>Optional</sup> <a name="localeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.localeInput"></a>

```typescript
public readonly localeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.default"></a>

```typescript
public readonly default: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsSelfRegistrationProfileAfterSubmitText;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText">IdentityDomainsSelfRegistrationProfileAfterSubmitText</a>

---


### IdentityDomainsSelfRegistrationProfileConsentTextList <a name="IdentityDomainsSelfRegistrationProfileConsentTextList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.get"></a>

```typescript
public get(index: number): IdentityDomainsSelfRegistrationProfileConsentTextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText">IdentityDomainsSelfRegistrationProfileConsentText</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsSelfRegistrationProfileConsentText[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText">IdentityDomainsSelfRegistrationProfileConsentText</a>[]

---


### IdentityDomainsSelfRegistrationProfileConsentTextOutputReference <a name="IdentityDomainsSelfRegistrationProfileConsentTextOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.resetDefault">resetDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.defaultInput">defaultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.localeInput">localeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.default">default</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText">IdentityDomainsSelfRegistrationProfileConsentText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `localeInput`<sup>Optional</sup> <a name="localeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.localeInput"></a>

```typescript
public readonly localeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.default"></a>

```typescript
public readonly default: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsSelfRegistrationProfileConsentText;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText">IdentityDomainsSelfRegistrationProfileConsentText</a>

---


### IdentityDomainsSelfRegistrationProfileDefaultGroupsList <a name="IdentityDomainsSelfRegistrationProfileDefaultGroupsList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.get"></a>

```typescript
public get(index: number): IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups">IdentityDomainsSelfRegistrationProfileDefaultGroups</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsSelfRegistrationProfileDefaultGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups">IdentityDomainsSelfRegistrationProfileDefaultGroups</a>[]

---


### IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference <a name="IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups">IdentityDomainsSelfRegistrationProfileDefaultGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsSelfRegistrationProfileDefaultGroups;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups">IdentityDomainsSelfRegistrationProfileDefaultGroups</a>

---


### IdentityDomainsSelfRegistrationProfileDisplayNameList <a name="IdentityDomainsSelfRegistrationProfileDisplayNameList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.get"></a>

```typescript
public get(index: number): IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName">IdentityDomainsSelfRegistrationProfileDisplayName</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsSelfRegistrationProfileDisplayName[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName">IdentityDomainsSelfRegistrationProfileDisplayName</a>[]

---


### IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference <a name="IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.resetDefault">resetDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.defaultInput">defaultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.localeInput">localeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.default">default</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName">IdentityDomainsSelfRegistrationProfileDisplayName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `localeInput`<sup>Optional</sup> <a name="localeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.localeInput"></a>

```typescript
public readonly localeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.default"></a>

```typescript
public readonly default: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsSelfRegistrationProfileDisplayName;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName">IdentityDomainsSelfRegistrationProfileDisplayName</a>

---


### IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference <a name="IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate">IdentityDomainsSelfRegistrationProfileEmailTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsSelfRegistrationProfileEmailTemplate;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate">IdentityDomainsSelfRegistrationProfileEmailTemplate</a>

---


### IdentityDomainsSelfRegistrationProfileFooterTextList <a name="IdentityDomainsSelfRegistrationProfileFooterTextList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.get"></a>

```typescript
public get(index: number): IdentityDomainsSelfRegistrationProfileFooterTextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText">IdentityDomainsSelfRegistrationProfileFooterText</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsSelfRegistrationProfileFooterText[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText">IdentityDomainsSelfRegistrationProfileFooterText</a>[]

---


### IdentityDomainsSelfRegistrationProfileFooterTextOutputReference <a name="IdentityDomainsSelfRegistrationProfileFooterTextOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.resetDefault">resetDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.defaultInput">defaultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.localeInput">localeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.default">default</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText">IdentityDomainsSelfRegistrationProfileFooterText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `localeInput`<sup>Optional</sup> <a name="localeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.localeInput"></a>

```typescript
public readonly localeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.default"></a>

```typescript
public readonly default: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsSelfRegistrationProfileFooterText;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText">IdentityDomainsSelfRegistrationProfileFooterText</a>

---


### IdentityDomainsSelfRegistrationProfileHeaderTextList <a name="IdentityDomainsSelfRegistrationProfileHeaderTextList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.get"></a>

```typescript
public get(index: number): IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText">IdentityDomainsSelfRegistrationProfileHeaderText</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsSelfRegistrationProfileHeaderText[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText">IdentityDomainsSelfRegistrationProfileHeaderText</a>[]

---


### IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference <a name="IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.resetDefault">resetDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.defaultInput">defaultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.localeInput">localeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.default">default</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText">IdentityDomainsSelfRegistrationProfileHeaderText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `localeInput`<sup>Optional</sup> <a name="localeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.localeInput"></a>

```typescript
public readonly localeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.default"></a>

```typescript
public readonly default: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsSelfRegistrationProfileHeaderText;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText">IdentityDomainsSelfRegistrationProfileHeaderText</a>

---


### IdentityDomainsSelfRegistrationProfileIdcsCreatedByList <a name="IdentityDomainsSelfRegistrationProfileIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.get"></a>

```typescript
public get(index: number): IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference <a name="IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedBy">IdentityDomainsSelfRegistrationProfileIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsSelfRegistrationProfileIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedBy">IdentityDomainsSelfRegistrationProfileIdcsCreatedBy</a>

---


### IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList <a name="IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference <a name="IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy">IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy">IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy</a>

---


### IdentityDomainsSelfRegistrationProfileMetaList <a name="IdentityDomainsSelfRegistrationProfileMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.get"></a>

```typescript
public get(index: number): IdentityDomainsSelfRegistrationProfileMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityDomainsSelfRegistrationProfileMetaOutputReference <a name="IdentityDomainsSelfRegistrationProfileMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMeta">IdentityDomainsSelfRegistrationProfileMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsSelfRegistrationProfileMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMeta">IdentityDomainsSelfRegistrationProfileMeta</a>

---


### IdentityDomainsSelfRegistrationProfileTagsList <a name="IdentityDomainsSelfRegistrationProfileTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.get"></a>

```typescript
public get(index: number): IdentityDomainsSelfRegistrationProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags">IdentityDomainsSelfRegistrationProfileTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsSelfRegistrationProfileTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags">IdentityDomainsSelfRegistrationProfileTags</a>[]

---


### IdentityDomainsSelfRegistrationProfileTagsOutputReference <a name="IdentityDomainsSelfRegistrationProfileTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags">IdentityDomainsSelfRegistrationProfileTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsSelfRegistrationProfileTags;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags">IdentityDomainsSelfRegistrationProfileTags</a>

---


### IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference <a name="IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts">IdentityDomainsSelfRegistrationProfileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsSelfRegistrationProfileTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts">IdentityDomainsSelfRegistrationProfileTimeouts</a>

---


### IdentityDomainsSelfRegistrationProfileUserAttributesList <a name="IdentityDomainsSelfRegistrationProfileUserAttributesList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.get"></a>

```typescript
public get(index: number): IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes">IdentityDomainsSelfRegistrationProfileUserAttributes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsSelfRegistrationProfileUserAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes">IdentityDomainsSelfRegistrationProfileUserAttributes</a>[]

---


### IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference <a name="IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer"></a>

```typescript
import { identityDomainsSelfRegistrationProfile } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.resetFullyQualifiedAttributeName">resetFullyQualifiedAttributeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFullyQualifiedAttributeName` <a name="resetFullyQualifiedAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.resetFullyQualifiedAttributeName"></a>

```typescript
public resetFullyQualifiedAttributeName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.deletable">deletable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fullyQualifiedAttributeNameInput">fullyQualifiedAttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.seqNumberInput">seqNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fullyQualifiedAttributeName">fullyQualifiedAttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.seqNumber">seqNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes">IdentityDomainsSelfRegistrationProfileUserAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deletable`<sup>Required</sup> <a name="deletable" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.deletable"></a>

```typescript
public readonly deletable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `fullyQualifiedAttributeNameInput`<sup>Optional</sup> <a name="fullyQualifiedAttributeNameInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fullyQualifiedAttributeNameInput"></a>

```typescript
public readonly fullyQualifiedAttributeNameInput: string;
```

- *Type:* string

---

##### `seqNumberInput`<sup>Optional</sup> <a name="seqNumberInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.seqNumberInput"></a>

```typescript
public readonly seqNumberInput: number;
```

- *Type:* number

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `fullyQualifiedAttributeName`<sup>Required</sup> <a name="fullyQualifiedAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fullyQualifiedAttributeName"></a>

```typescript
public readonly fullyQualifiedAttributeName: string;
```

- *Type:* string

---

##### `seqNumber`<sup>Required</sup> <a name="seqNumber" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.seqNumber"></a>

```typescript
public readonly seqNumber: number;
```

- *Type:* number

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsSelfRegistrationProfileUserAttributes;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes">IdentityDomainsSelfRegistrationProfileUserAttributes</a>

---



