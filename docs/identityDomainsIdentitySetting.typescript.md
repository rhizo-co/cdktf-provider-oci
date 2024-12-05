# `identityDomainsIdentitySetting` Submodule <a name="`identityDomainsIdentitySetting` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsIdentitySetting <a name="IdentityDomainsIdentitySetting" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting oci_identity_domains_identity_setting}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer"></a>

```typescript
import { identityDomainsIdentitySetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsIdentitySetting.IdentityDomainsIdentitySetting(scope: Construct, id: string, config: IdentityDomainsIdentitySettingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig">IdentityDomainsIdentitySettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig">IdentityDomainsIdentitySettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putMyProfile">putMyProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putPosixGid">putPosixGid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putPosixUid">putPosixUid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTags">putTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTokens">putTokens</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetEmitLockedMessageWhenUserIsLocked">resetEmitLockedMessageWhenUserIsLocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetMyProfile">resetMyProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetOcid">resetOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetPosixGid">resetPosixGid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetPosixUid">resetPosixUid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetPrimaryEmailRequired">resetPrimaryEmailRequired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetReturnInactiveOverLockedMessage">resetReturnInactiveOverLockedMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetTokens">resetTokens</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetUserAllowedToSetRecoveryEmail">resetUserAllowedToSetRecoveryEmail</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMyProfile` <a name="putMyProfile" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putMyProfile"></a>

```typescript
public putMyProfile(value: IdentityDomainsIdentitySettingMyProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putMyProfile.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile">IdentityDomainsIdentitySettingMyProfile</a>

---

##### `putPosixGid` <a name="putPosixGid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putPosixGid"></a>

```typescript
public putPosixGid(value: IdentityDomainsIdentitySettingPosixGid): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putPosixGid.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid">IdentityDomainsIdentitySettingPosixGid</a>

---

##### `putPosixUid` <a name="putPosixUid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putPosixUid"></a>

```typescript
public putPosixUid(value: IdentityDomainsIdentitySettingPosixUid): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putPosixUid.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid">IdentityDomainsIdentitySettingPosixUid</a>

---

##### `putTags` <a name="putTags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTags"></a>

```typescript
public putTags(value: IResolvable | IdentityDomainsIdentitySettingTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags">IdentityDomainsIdentitySettingTags</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTimeouts"></a>

```typescript
public putTimeouts(value: IdentityDomainsIdentitySettingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts">IdentityDomainsIdentitySettingTimeouts</a>

---

##### `putTokens` <a name="putTokens" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTokens"></a>

```typescript
public putTokens(value: IResolvable | IdentityDomainsIdentitySettingTokens[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.putTokens.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens">IdentityDomainsIdentitySettingTokens</a>[]

---

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetAttributeSets"></a>

```typescript
public resetAttributeSets(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetEmitLockedMessageWhenUserIsLocked` <a name="resetEmitLockedMessageWhenUserIsLocked" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetEmitLockedMessageWhenUserIsLocked"></a>

```typescript
public resetEmitLockedMessageWhenUserIsLocked(): void
```

##### `resetExternalId` <a name="resetExternalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetExternalId"></a>

```typescript
public resetExternalId(): void
```

##### `resetMyProfile` <a name="resetMyProfile" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetMyProfile"></a>

```typescript
public resetMyProfile(): void
```

##### `resetOcid` <a name="resetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetOcid"></a>

```typescript
public resetOcid(): void
```

##### `resetPosixGid` <a name="resetPosixGid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetPosixGid"></a>

```typescript
public resetPosixGid(): void
```

##### `resetPosixUid` <a name="resetPosixUid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetPosixUid"></a>

```typescript
public resetPosixUid(): void
```

##### `resetPrimaryEmailRequired` <a name="resetPrimaryEmailRequired" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetPrimaryEmailRequired"></a>

```typescript
public resetPrimaryEmailRequired(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

##### `resetReturnInactiveOverLockedMessage` <a name="resetReturnInactiveOverLockedMessage" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetReturnInactiveOverLockedMessage"></a>

```typescript
public resetReturnInactiveOverLockedMessage(): void
```

##### `resetTags` <a name="resetTags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTokens` <a name="resetTokens" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetTokens"></a>

```typescript
public resetTokens(): void
```

##### `resetUserAllowedToSetRecoveryEmail` <a name="resetUserAllowedToSetRecoveryEmail" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.resetUserAllowedToSetRecoveryEmail"></a>

```typescript
public resetUserAllowedToSetRecoveryEmail(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityDomainsIdentitySetting resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isConstruct"></a>

```typescript
import { identityDomainsIdentitySetting } from 'rhizo-co-terraform-provider-oci'

identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isTerraformElement"></a>

```typescript
import { identityDomainsIdentitySetting } from 'rhizo-co-terraform-provider-oci'

identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isTerraformResource"></a>

```typescript
import { identityDomainsIdentitySetting } from 'rhizo-co-terraform-provider-oci'

identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.generateConfigForImport"></a>

```typescript
import { identityDomainsIdentitySetting } from 'rhizo-co-terraform-provider-oci'

identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IdentityDomainsIdentitySetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityDomainsIdentitySetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityDomainsIdentitySetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsIdentitySetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList">IdentityDomainsIdentitySettingIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList">IdentityDomainsIdentitySettingIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList">IdentityDomainsIdentitySettingMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.myProfile">myProfile</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference">IdentityDomainsIdentitySettingMyProfileOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.posixGid">posixGid</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference">IdentityDomainsIdentitySettingPosixGidOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.posixUid">posixUid</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference">IdentityDomainsIdentitySettingPosixUidOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.removeInvalidEmails">removeInvalidEmails</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList">IdentityDomainsIdentitySettingTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference">IdentityDomainsIdentitySettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tokens">tokens</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList">IdentityDomainsIdentitySettingTokensList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.attributeSetsInput">attributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.attributesInput">attributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.emitLockedMessageWhenUserIsLockedInput">emitLockedMessageWhenUserIsLockedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.identitySettingIdInput">identitySettingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.myProfileInput">myProfileInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile">IdentityDomainsIdentitySettingMyProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.ocidInput">ocidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.posixGidInput">posixGidInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid">IdentityDomainsIdentitySettingPosixGid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.posixUidInput">posixUidInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid">IdentityDomainsIdentitySettingPosixUid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.primaryEmailRequiredInput">primaryEmailRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.returnInactiveOverLockedMessageInput">returnInactiveOverLockedMessageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.schemasInput">schemasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tagsInput">tagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags">IdentityDomainsIdentitySettingTags</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts">IdentityDomainsIdentitySettingTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tokensInput">tokensInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens">IdentityDomainsIdentitySettingTokens</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.userAllowedToSetRecoveryEmailInput">userAllowedToSetRecoveryEmailInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.emitLockedMessageWhenUserIsLocked">emitLockedMessageWhenUserIsLocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.identitySettingId">identitySettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.primaryEmailRequired">primaryEmailRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.returnInactiveOverLockedMessage">returnInactiveOverLockedMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.userAllowedToSetRecoveryEmail">userAllowedToSetRecoveryEmail</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: IdentityDomainsIdentitySettingIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList">IdentityDomainsIdentitySettingIdcsCreatedByList</a>

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: IdentityDomainsIdentitySettingIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList">IdentityDomainsIdentitySettingIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.meta"></a>

```typescript
public readonly meta: IdentityDomainsIdentitySettingMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList">IdentityDomainsIdentitySettingMetaList</a>

---

##### `myProfile`<sup>Required</sup> <a name="myProfile" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.myProfile"></a>

```typescript
public readonly myProfile: IdentityDomainsIdentitySettingMyProfileOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference">IdentityDomainsIdentitySettingMyProfileOutputReference</a>

---

##### `posixGid`<sup>Required</sup> <a name="posixGid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.posixGid"></a>

```typescript
public readonly posixGid: IdentityDomainsIdentitySettingPosixGidOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference">IdentityDomainsIdentitySettingPosixGidOutputReference</a>

---

##### `posixUid`<sup>Required</sup> <a name="posixUid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.posixUid"></a>

```typescript
public readonly posixUid: IdentityDomainsIdentitySettingPosixUidOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference">IdentityDomainsIdentitySettingPosixUidOutputReference</a>

---

##### `removeInvalidEmails`<sup>Required</sup> <a name="removeInvalidEmails" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.removeInvalidEmails"></a>

```typescript
public readonly removeInvalidEmails: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tags"></a>

```typescript
public readonly tags: IdentityDomainsIdentitySettingTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList">IdentityDomainsIdentitySettingTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.timeouts"></a>

```typescript
public readonly timeouts: IdentityDomainsIdentitySettingTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference">IdentityDomainsIdentitySettingTimeoutsOutputReference</a>

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tokens"></a>

```typescript
public readonly tokens: IdentityDomainsIdentitySettingTokensList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList">IdentityDomainsIdentitySettingTokensList</a>

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.attributeSetsInput"></a>

```typescript
public readonly attributeSetsInput: string[];
```

- *Type:* string[]

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.attributesInput"></a>

```typescript
public readonly attributesInput: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `emitLockedMessageWhenUserIsLockedInput`<sup>Optional</sup> <a name="emitLockedMessageWhenUserIsLockedInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.emitLockedMessageWhenUserIsLockedInput"></a>

```typescript
public readonly emitLockedMessageWhenUserIsLockedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `identitySettingIdInput`<sup>Optional</sup> <a name="identitySettingIdInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.identitySettingIdInput"></a>

```typescript
public readonly identitySettingIdInput: string;
```

- *Type:* string

---

##### `myProfileInput`<sup>Optional</sup> <a name="myProfileInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.myProfileInput"></a>

```typescript
public readonly myProfileInput: IdentityDomainsIdentitySettingMyProfile;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile">IdentityDomainsIdentitySettingMyProfile</a>

---

##### `ocidInput`<sup>Optional</sup> <a name="ocidInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.ocidInput"></a>

```typescript
public readonly ocidInput: string;
```

- *Type:* string

---

##### `posixGidInput`<sup>Optional</sup> <a name="posixGidInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.posixGidInput"></a>

```typescript
public readonly posixGidInput: IdentityDomainsIdentitySettingPosixGid;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid">IdentityDomainsIdentitySettingPosixGid</a>

---

##### `posixUidInput`<sup>Optional</sup> <a name="posixUidInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.posixUidInput"></a>

```typescript
public readonly posixUidInput: IdentityDomainsIdentitySettingPosixUid;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid">IdentityDomainsIdentitySettingPosixUid</a>

---

##### `primaryEmailRequiredInput`<sup>Optional</sup> <a name="primaryEmailRequiredInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.primaryEmailRequiredInput"></a>

```typescript
public readonly primaryEmailRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `returnInactiveOverLockedMessageInput`<sup>Optional</sup> <a name="returnInactiveOverLockedMessageInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.returnInactiveOverLockedMessageInput"></a>

```typescript
public readonly returnInactiveOverLockedMessageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schemasInput`<sup>Optional</sup> <a name="schemasInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.schemasInput"></a>

```typescript
public readonly schemasInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IdentityDomainsIdentitySettingTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags">IdentityDomainsIdentitySettingTags</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IdentityDomainsIdentitySettingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts">IdentityDomainsIdentitySettingTimeouts</a>

---

##### `tokensInput`<sup>Optional</sup> <a name="tokensInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tokensInput"></a>

```typescript
public readonly tokensInput: IResolvable | IdentityDomainsIdentitySettingTokens[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens">IdentityDomainsIdentitySettingTokens</a>[]

---

##### `userAllowedToSetRecoveryEmailInput`<sup>Optional</sup> <a name="userAllowedToSetRecoveryEmailInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.userAllowedToSetRecoveryEmailInput"></a>

```typescript
public readonly userAllowedToSetRecoveryEmailInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `emitLockedMessageWhenUserIsLocked`<sup>Required</sup> <a name="emitLockedMessageWhenUserIsLocked" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.emitLockedMessageWhenUserIsLocked"></a>

```typescript
public readonly emitLockedMessageWhenUserIsLocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `identitySettingId`<sup>Required</sup> <a name="identitySettingId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.identitySettingId"></a>

```typescript
public readonly identitySettingId: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `primaryEmailRequired`<sup>Required</sup> <a name="primaryEmailRequired" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.primaryEmailRequired"></a>

```typescript
public readonly primaryEmailRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `returnInactiveOverLockedMessage`<sup>Required</sup> <a name="returnInactiveOverLockedMessage" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.returnInactiveOverLockedMessage"></a>

```typescript
public readonly returnInactiveOverLockedMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `userAllowedToSetRecoveryEmail`<sup>Required</sup> <a name="userAllowedToSetRecoveryEmail" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.userAllowedToSetRecoveryEmail"></a>

```typescript
public readonly userAllowedToSetRecoveryEmail: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySetting.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsIdentitySettingConfig <a name="IdentityDomainsIdentitySettingConfig" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.Initializer"></a>

```typescript
import { identityDomainsIdentitySetting } from 'rhizo-co-terraform-provider-oci'

const identityDomainsIdentitySettingConfig: identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#idcs_endpoint IdentityDomainsIdentitySetting#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.identitySettingId">identitySettingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#identity_setting_id IdentityDomainsIdentitySetting#identity_setting_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.schemas">schemas</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#schemas IdentityDomainsIdentitySetting#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.attributes">attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#attributes IdentityDomainsIdentitySetting#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#attribute_sets IdentityDomainsIdentitySetting#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#authorization IdentityDomainsIdentitySetting#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.emitLockedMessageWhenUserIsLocked">emitLockedMessageWhenUserIsLocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#emit_locked_message_when_user_is_locked IdentityDomainsIdentitySetting#emit_locked_message_when_user_is_locked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.externalId">externalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#external_id IdentityDomainsIdentitySetting#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.myProfile">myProfile</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile">IdentityDomainsIdentitySettingMyProfile</a></code> | my_profile block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.ocid">ocid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#ocid IdentityDomainsIdentitySetting#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.posixGid">posixGid</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid">IdentityDomainsIdentitySettingPosixGid</a></code> | posix_gid block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.posixUid">posixUid</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid">IdentityDomainsIdentitySettingPosixUid</a></code> | posix_uid block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.primaryEmailRequired">primaryEmailRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#primary_email_required IdentityDomainsIdentitySetting#primary_email_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#resource_type_schema_version IdentityDomainsIdentitySetting#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.returnInactiveOverLockedMessage">returnInactiveOverLockedMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#return_inactive_over_locked_message IdentityDomainsIdentitySetting#return_inactive_over_locked_message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.tags">tags</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags">IdentityDomainsIdentitySettingTags</a>[]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts">IdentityDomainsIdentitySettingTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.tokens">tokens</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens">IdentityDomainsIdentitySettingTokens</a>[]</code> | tokens block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.userAllowedToSetRecoveryEmail">userAllowedToSetRecoveryEmail</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#user_allowed_to_set_recovery_email IdentityDomainsIdentitySetting#user_allowed_to_set_recovery_email}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#idcs_endpoint IdentityDomainsIdentitySetting#idcs_endpoint}.

---

##### `identitySettingId`<sup>Required</sup> <a name="identitySettingId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.identitySettingId"></a>

```typescript
public readonly identitySettingId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#identity_setting_id IdentityDomainsIdentitySetting#identity_setting_id}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#schemas IdentityDomainsIdentitySetting#schemas}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#attributes IdentityDomainsIdentitySetting#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#attribute_sets IdentityDomainsIdentitySetting#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#authorization IdentityDomainsIdentitySetting#authorization}.

---

##### `emitLockedMessageWhenUserIsLocked`<sup>Optional</sup> <a name="emitLockedMessageWhenUserIsLocked" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.emitLockedMessageWhenUserIsLocked"></a>

```typescript
public readonly emitLockedMessageWhenUserIsLocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#emit_locked_message_when_user_is_locked IdentityDomainsIdentitySetting#emit_locked_message_when_user_is_locked}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#external_id IdentityDomainsIdentitySetting#external_id}.

---

##### `myProfile`<sup>Optional</sup> <a name="myProfile" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.myProfile"></a>

```typescript
public readonly myProfile: IdentityDomainsIdentitySettingMyProfile;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile">IdentityDomainsIdentitySettingMyProfile</a>

my_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#my_profile IdentityDomainsIdentitySetting#my_profile}

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#ocid IdentityDomainsIdentitySetting#ocid}.

---

##### `posixGid`<sup>Optional</sup> <a name="posixGid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.posixGid"></a>

```typescript
public readonly posixGid: IdentityDomainsIdentitySettingPosixGid;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid">IdentityDomainsIdentitySettingPosixGid</a>

posix_gid block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#posix_gid IdentityDomainsIdentitySetting#posix_gid}

---

##### `posixUid`<sup>Optional</sup> <a name="posixUid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.posixUid"></a>

```typescript
public readonly posixUid: IdentityDomainsIdentitySettingPosixUid;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid">IdentityDomainsIdentitySettingPosixUid</a>

posix_uid block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#posix_uid IdentityDomainsIdentitySetting#posix_uid}

---

##### `primaryEmailRequired`<sup>Optional</sup> <a name="primaryEmailRequired" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.primaryEmailRequired"></a>

```typescript
public readonly primaryEmailRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#primary_email_required IdentityDomainsIdentitySetting#primary_email_required}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#resource_type_schema_version IdentityDomainsIdentitySetting#resource_type_schema_version}.

---

##### `returnInactiveOverLockedMessage`<sup>Optional</sup> <a name="returnInactiveOverLockedMessage" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.returnInactiveOverLockedMessage"></a>

```typescript
public readonly returnInactiveOverLockedMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#return_inactive_over_locked_message IdentityDomainsIdentitySetting#return_inactive_over_locked_message}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IdentityDomainsIdentitySettingTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags">IdentityDomainsIdentitySettingTags</a>[]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#tags IdentityDomainsIdentitySetting#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IdentityDomainsIdentitySettingTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts">IdentityDomainsIdentitySettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#timeouts IdentityDomainsIdentitySetting#timeouts}

---

##### `tokens`<sup>Optional</sup> <a name="tokens" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.tokens"></a>

```typescript
public readonly tokens: IResolvable | IdentityDomainsIdentitySettingTokens[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens">IdentityDomainsIdentitySettingTokens</a>[]

tokens block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#tokens IdentityDomainsIdentitySetting#tokens}

---

##### `userAllowedToSetRecoveryEmail`<sup>Optional</sup> <a name="userAllowedToSetRecoveryEmail" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingConfig.property.userAllowedToSetRecoveryEmail"></a>

```typescript
public readonly userAllowedToSetRecoveryEmail: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#user_allowed_to_set_recovery_email IdentityDomainsIdentitySetting#user_allowed_to_set_recovery_email}.

---

### IdentityDomainsIdentitySettingIdcsCreatedBy <a name="IdentityDomainsIdentitySettingIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedBy.Initializer"></a>

```typescript
import { identityDomainsIdentitySetting } from 'rhizo-co-terraform-provider-oci'

const identityDomainsIdentitySettingIdcsCreatedBy: identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedBy = { ... }
```


### IdentityDomainsIdentitySettingIdcsLastModifiedBy <a name="IdentityDomainsIdentitySettingIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedBy.Initializer"></a>

```typescript
import { identityDomainsIdentitySetting } from 'rhizo-co-terraform-provider-oci'

const identityDomainsIdentitySettingIdcsLastModifiedBy: identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedBy = { ... }
```


### IdentityDomainsIdentitySettingMeta <a name="IdentityDomainsIdentitySettingMeta" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMeta.Initializer"></a>

```typescript
import { identityDomainsIdentitySetting } from 'rhizo-co-terraform-provider-oci'

const identityDomainsIdentitySettingMeta: identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMeta = { ... }
```


### IdentityDomainsIdentitySettingMyProfile <a name="IdentityDomainsIdentitySettingMyProfile" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.Initializer"></a>

```typescript
import { identityDomainsIdentitySetting } from 'rhizo-co-terraform-provider-oci'

const identityDomainsIdentitySettingMyProfile: identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.property.allowEndUsersToChangeTheirPassword">allowEndUsersToChangeTheirPassword</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_change_their_password IdentityDomainsIdentitySetting#allow_end_users_to_change_their_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.property.allowEndUsersToLinkTheirSupportAccount">allowEndUsersToLinkTheirSupportAccount</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_link_their_support_account IdentityDomainsIdentitySetting#allow_end_users_to_link_their_support_account}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.property.allowEndUsersToManageTheirCapabilities">allowEndUsersToManageTheirCapabilities</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_manage_their_capabilities IdentityDomainsIdentitySetting#allow_end_users_to_manage_their_capabilities}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.property.allowEndUsersToUpdateTheirSecuritySettings">allowEndUsersToUpdateTheirSecuritySettings</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_update_their_security_settings IdentityDomainsIdentitySetting#allow_end_users_to_update_their_security_settings}. |

---

##### `allowEndUsersToChangeTheirPassword`<sup>Optional</sup> <a name="allowEndUsersToChangeTheirPassword" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.property.allowEndUsersToChangeTheirPassword"></a>

```typescript
public readonly allowEndUsersToChangeTheirPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_change_their_password IdentityDomainsIdentitySetting#allow_end_users_to_change_their_password}.

---

##### `allowEndUsersToLinkTheirSupportAccount`<sup>Optional</sup> <a name="allowEndUsersToLinkTheirSupportAccount" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.property.allowEndUsersToLinkTheirSupportAccount"></a>

```typescript
public readonly allowEndUsersToLinkTheirSupportAccount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_link_their_support_account IdentityDomainsIdentitySetting#allow_end_users_to_link_their_support_account}.

---

##### `allowEndUsersToManageTheirCapabilities`<sup>Optional</sup> <a name="allowEndUsersToManageTheirCapabilities" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.property.allowEndUsersToManageTheirCapabilities"></a>

```typescript
public readonly allowEndUsersToManageTheirCapabilities: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_manage_their_capabilities IdentityDomainsIdentitySetting#allow_end_users_to_manage_their_capabilities}.

---

##### `allowEndUsersToUpdateTheirSecuritySettings`<sup>Optional</sup> <a name="allowEndUsersToUpdateTheirSecuritySettings" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile.property.allowEndUsersToUpdateTheirSecuritySettings"></a>

```typescript
public readonly allowEndUsersToUpdateTheirSecuritySettings: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_update_their_security_settings IdentityDomainsIdentitySetting#allow_end_users_to_update_their_security_settings}.

---

### IdentityDomainsIdentitySettingPosixGid <a name="IdentityDomainsIdentitySettingPosixGid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid.Initializer"></a>

```typescript
import { identityDomainsIdentitySetting } from 'rhizo-co-terraform-provider-oci'

const identityDomainsIdentitySettingPosixGid: identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid.property.manualAssignmentEndsAt">manualAssignmentEndsAt</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_ends_at IdentityDomainsIdentitySetting#manual_assignment_ends_at}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid.property.manualAssignmentStartsFrom">manualAssignmentStartsFrom</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_starts_from IdentityDomainsIdentitySetting#manual_assignment_starts_from}. |

---

##### `manualAssignmentEndsAt`<sup>Optional</sup> <a name="manualAssignmentEndsAt" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid.property.manualAssignmentEndsAt"></a>

```typescript
public readonly manualAssignmentEndsAt: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_ends_at IdentityDomainsIdentitySetting#manual_assignment_ends_at}.

---

##### `manualAssignmentStartsFrom`<sup>Optional</sup> <a name="manualAssignmentStartsFrom" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid.property.manualAssignmentStartsFrom"></a>

```typescript
public readonly manualAssignmentStartsFrom: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_starts_from IdentityDomainsIdentitySetting#manual_assignment_starts_from}.

---

### IdentityDomainsIdentitySettingPosixUid <a name="IdentityDomainsIdentitySettingPosixUid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid.Initializer"></a>

```typescript
import { identityDomainsIdentitySetting } from 'rhizo-co-terraform-provider-oci'

const identityDomainsIdentitySettingPosixUid: identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid.property.manualAssignmentEndsAt">manualAssignmentEndsAt</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_ends_at IdentityDomainsIdentitySetting#manual_assignment_ends_at}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid.property.manualAssignmentStartsFrom">manualAssignmentStartsFrom</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_starts_from IdentityDomainsIdentitySetting#manual_assignment_starts_from}. |

---

##### `manualAssignmentEndsAt`<sup>Optional</sup> <a name="manualAssignmentEndsAt" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid.property.manualAssignmentEndsAt"></a>

```typescript
public readonly manualAssignmentEndsAt: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_ends_at IdentityDomainsIdentitySetting#manual_assignment_ends_at}.

---

##### `manualAssignmentStartsFrom`<sup>Optional</sup> <a name="manualAssignmentStartsFrom" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid.property.manualAssignmentStartsFrom"></a>

```typescript
public readonly manualAssignmentStartsFrom: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#manual_assignment_starts_from IdentityDomainsIdentitySetting#manual_assignment_starts_from}.

---

### IdentityDomainsIdentitySettingTags <a name="IdentityDomainsIdentitySettingTags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags.Initializer"></a>

```typescript
import { identityDomainsIdentitySetting } from 'rhizo-co-terraform-provider-oci'

const identityDomainsIdentitySettingTags: identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#key IdentityDomainsIdentitySetting#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#value IdentityDomainsIdentitySetting#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#key IdentityDomainsIdentitySetting#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#value IdentityDomainsIdentitySetting#value}.

---

### IdentityDomainsIdentitySettingTimeouts <a name="IdentityDomainsIdentitySettingTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts.Initializer"></a>

```typescript
import { identityDomainsIdentitySetting } from 'rhizo-co-terraform-provider-oci'

const identityDomainsIdentitySettingTimeouts: identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#create IdentityDomainsIdentitySetting#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#delete IdentityDomainsIdentitySetting#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#update IdentityDomainsIdentitySetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#create IdentityDomainsIdentitySetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#delete IdentityDomainsIdentitySetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#update IdentityDomainsIdentitySetting#update}.

---

### IdentityDomainsIdentitySettingTokens <a name="IdentityDomainsIdentitySettingTokens" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens.Initializer"></a>

```typescript
import { identityDomainsIdentitySetting } from 'rhizo-co-terraform-provider-oci'

const identityDomainsIdentitySettingTokens: identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#type IdentityDomainsIdentitySetting#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens.property.expiresAfter">expiresAfter</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#expires_after IdentityDomainsIdentitySetting#expires_after}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#type IdentityDomainsIdentitySetting#type}.

---

##### `expiresAfter`<sup>Optional</sup> <a name="expiresAfter" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens.property.expiresAfter"></a>

```typescript
public readonly expiresAfter: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_setting#expires_after IdentityDomainsIdentitySetting#expires_after}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsIdentitySettingIdcsCreatedByList <a name="IdentityDomainsIdentitySettingIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.Initializer"></a>

```typescript
import { identityDomainsIdentitySetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.get"></a>

```typescript
public get(index: number): IdentityDomainsIdentitySettingIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityDomainsIdentitySettingIdcsCreatedByOutputReference <a name="IdentityDomainsIdentitySettingIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { identityDomainsIdentitySetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedBy">IdentityDomainsIdentitySettingIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsIdentitySettingIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsCreatedBy">IdentityDomainsIdentitySettingIdcsCreatedBy</a>

---


### IdentityDomainsIdentitySettingIdcsLastModifiedByList <a name="IdentityDomainsIdentitySettingIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.Initializer"></a>

```typescript
import { identityDomainsIdentitySetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference <a name="IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { identityDomainsIdentitySetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedBy">IdentityDomainsIdentitySettingIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsIdentitySettingIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingIdcsLastModifiedBy">IdentityDomainsIdentitySettingIdcsLastModifiedBy</a>

---


### IdentityDomainsIdentitySettingMetaList <a name="IdentityDomainsIdentitySettingMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.Initializer"></a>

```typescript
import { identityDomainsIdentitySetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.get"></a>

```typescript
public get(index: number): IdentityDomainsIdentitySettingMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityDomainsIdentitySettingMetaOutputReference <a name="IdentityDomainsIdentitySettingMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer"></a>

```typescript
import { identityDomainsIdentitySetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMeta">IdentityDomainsIdentitySettingMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsIdentitySettingMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMeta">IdentityDomainsIdentitySettingMeta</a>

---


### IdentityDomainsIdentitySettingMyProfileOutputReference <a name="IdentityDomainsIdentitySettingMyProfileOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.Initializer"></a>

```typescript
import { identityDomainsIdentitySetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resetAllowEndUsersToChangeTheirPassword">resetAllowEndUsersToChangeTheirPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resetAllowEndUsersToLinkTheirSupportAccount">resetAllowEndUsersToLinkTheirSupportAccount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resetAllowEndUsersToManageTheirCapabilities">resetAllowEndUsersToManageTheirCapabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resetAllowEndUsersToUpdateTheirSecuritySettings">resetAllowEndUsersToUpdateTheirSecuritySettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowEndUsersToChangeTheirPassword` <a name="resetAllowEndUsersToChangeTheirPassword" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resetAllowEndUsersToChangeTheirPassword"></a>

```typescript
public resetAllowEndUsersToChangeTheirPassword(): void
```

##### `resetAllowEndUsersToLinkTheirSupportAccount` <a name="resetAllowEndUsersToLinkTheirSupportAccount" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resetAllowEndUsersToLinkTheirSupportAccount"></a>

```typescript
public resetAllowEndUsersToLinkTheirSupportAccount(): void
```

##### `resetAllowEndUsersToManageTheirCapabilities` <a name="resetAllowEndUsersToManageTheirCapabilities" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resetAllowEndUsersToManageTheirCapabilities"></a>

```typescript
public resetAllowEndUsersToManageTheirCapabilities(): void
```

##### `resetAllowEndUsersToUpdateTheirSecuritySettings` <a name="resetAllowEndUsersToUpdateTheirSecuritySettings" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.resetAllowEndUsersToUpdateTheirSecuritySettings"></a>

```typescript
public resetAllowEndUsersToUpdateTheirSecuritySettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToChangeTheirPasswordInput">allowEndUsersToChangeTheirPasswordInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToLinkTheirSupportAccountInput">allowEndUsersToLinkTheirSupportAccountInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToManageTheirCapabilitiesInput">allowEndUsersToManageTheirCapabilitiesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToUpdateTheirSecuritySettingsInput">allowEndUsersToUpdateTheirSecuritySettingsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToChangeTheirPassword">allowEndUsersToChangeTheirPassword</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToLinkTheirSupportAccount">allowEndUsersToLinkTheirSupportAccount</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToManageTheirCapabilities">allowEndUsersToManageTheirCapabilities</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToUpdateTheirSecuritySettings">allowEndUsersToUpdateTheirSecuritySettings</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile">IdentityDomainsIdentitySettingMyProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowEndUsersToChangeTheirPasswordInput`<sup>Optional</sup> <a name="allowEndUsersToChangeTheirPasswordInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToChangeTheirPasswordInput"></a>

```typescript
public readonly allowEndUsersToChangeTheirPasswordInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowEndUsersToLinkTheirSupportAccountInput`<sup>Optional</sup> <a name="allowEndUsersToLinkTheirSupportAccountInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToLinkTheirSupportAccountInput"></a>

```typescript
public readonly allowEndUsersToLinkTheirSupportAccountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowEndUsersToManageTheirCapabilitiesInput`<sup>Optional</sup> <a name="allowEndUsersToManageTheirCapabilitiesInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToManageTheirCapabilitiesInput"></a>

```typescript
public readonly allowEndUsersToManageTheirCapabilitiesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowEndUsersToUpdateTheirSecuritySettingsInput`<sup>Optional</sup> <a name="allowEndUsersToUpdateTheirSecuritySettingsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToUpdateTheirSecuritySettingsInput"></a>

```typescript
public readonly allowEndUsersToUpdateTheirSecuritySettingsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowEndUsersToChangeTheirPassword`<sup>Required</sup> <a name="allowEndUsersToChangeTheirPassword" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToChangeTheirPassword"></a>

```typescript
public readonly allowEndUsersToChangeTheirPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowEndUsersToLinkTheirSupportAccount`<sup>Required</sup> <a name="allowEndUsersToLinkTheirSupportAccount" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToLinkTheirSupportAccount"></a>

```typescript
public readonly allowEndUsersToLinkTheirSupportAccount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowEndUsersToManageTheirCapabilities`<sup>Required</sup> <a name="allowEndUsersToManageTheirCapabilities" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToManageTheirCapabilities"></a>

```typescript
public readonly allowEndUsersToManageTheirCapabilities: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowEndUsersToUpdateTheirSecuritySettings`<sup>Required</sup> <a name="allowEndUsersToUpdateTheirSecuritySettings" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.allowEndUsersToUpdateTheirSecuritySettings"></a>

```typescript
public readonly allowEndUsersToUpdateTheirSecuritySettings: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsIdentitySettingMyProfile;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingMyProfile">IdentityDomainsIdentitySettingMyProfile</a>

---


### IdentityDomainsIdentitySettingPosixGidOutputReference <a name="IdentityDomainsIdentitySettingPosixGidOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.Initializer"></a>

```typescript
import { identityDomainsIdentitySetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.resetManualAssignmentEndsAt">resetManualAssignmentEndsAt</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.resetManualAssignmentStartsFrom">resetManualAssignmentStartsFrom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetManualAssignmentEndsAt` <a name="resetManualAssignmentEndsAt" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.resetManualAssignmentEndsAt"></a>

```typescript
public resetManualAssignmentEndsAt(): void
```

##### `resetManualAssignmentStartsFrom` <a name="resetManualAssignmentStartsFrom" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.resetManualAssignmentStartsFrom"></a>

```typescript
public resetManualAssignmentStartsFrom(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.manualAssignmentEndsAtInput">manualAssignmentEndsAtInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.manualAssignmentStartsFromInput">manualAssignmentStartsFromInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.manualAssignmentEndsAt">manualAssignmentEndsAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.manualAssignmentStartsFrom">manualAssignmentStartsFrom</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid">IdentityDomainsIdentitySettingPosixGid</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `manualAssignmentEndsAtInput`<sup>Optional</sup> <a name="manualAssignmentEndsAtInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.manualAssignmentEndsAtInput"></a>

```typescript
public readonly manualAssignmentEndsAtInput: number;
```

- *Type:* number

---

##### `manualAssignmentStartsFromInput`<sup>Optional</sup> <a name="manualAssignmentStartsFromInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.manualAssignmentStartsFromInput"></a>

```typescript
public readonly manualAssignmentStartsFromInput: number;
```

- *Type:* number

---

##### `manualAssignmentEndsAt`<sup>Required</sup> <a name="manualAssignmentEndsAt" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.manualAssignmentEndsAt"></a>

```typescript
public readonly manualAssignmentEndsAt: number;
```

- *Type:* number

---

##### `manualAssignmentStartsFrom`<sup>Required</sup> <a name="manualAssignmentStartsFrom" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.manualAssignmentStartsFrom"></a>

```typescript
public readonly manualAssignmentStartsFrom: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGidOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsIdentitySettingPosixGid;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixGid">IdentityDomainsIdentitySettingPosixGid</a>

---


### IdentityDomainsIdentitySettingPosixUidOutputReference <a name="IdentityDomainsIdentitySettingPosixUidOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.Initializer"></a>

```typescript
import { identityDomainsIdentitySetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.resetManualAssignmentEndsAt">resetManualAssignmentEndsAt</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.resetManualAssignmentStartsFrom">resetManualAssignmentStartsFrom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetManualAssignmentEndsAt` <a name="resetManualAssignmentEndsAt" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.resetManualAssignmentEndsAt"></a>

```typescript
public resetManualAssignmentEndsAt(): void
```

##### `resetManualAssignmentStartsFrom` <a name="resetManualAssignmentStartsFrom" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.resetManualAssignmentStartsFrom"></a>

```typescript
public resetManualAssignmentStartsFrom(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.manualAssignmentEndsAtInput">manualAssignmentEndsAtInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.manualAssignmentStartsFromInput">manualAssignmentStartsFromInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.manualAssignmentEndsAt">manualAssignmentEndsAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.manualAssignmentStartsFrom">manualAssignmentStartsFrom</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid">IdentityDomainsIdentitySettingPosixUid</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `manualAssignmentEndsAtInput`<sup>Optional</sup> <a name="manualAssignmentEndsAtInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.manualAssignmentEndsAtInput"></a>

```typescript
public readonly manualAssignmentEndsAtInput: number;
```

- *Type:* number

---

##### `manualAssignmentStartsFromInput`<sup>Optional</sup> <a name="manualAssignmentStartsFromInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.manualAssignmentStartsFromInput"></a>

```typescript
public readonly manualAssignmentStartsFromInput: number;
```

- *Type:* number

---

##### `manualAssignmentEndsAt`<sup>Required</sup> <a name="manualAssignmentEndsAt" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.manualAssignmentEndsAt"></a>

```typescript
public readonly manualAssignmentEndsAt: number;
```

- *Type:* number

---

##### `manualAssignmentStartsFrom`<sup>Required</sup> <a name="manualAssignmentStartsFrom" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.manualAssignmentStartsFrom"></a>

```typescript
public readonly manualAssignmentStartsFrom: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUidOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsIdentitySettingPosixUid;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingPosixUid">IdentityDomainsIdentitySettingPosixUid</a>

---


### IdentityDomainsIdentitySettingTagsList <a name="IdentityDomainsIdentitySettingTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.Initializer"></a>

```typescript
import { identityDomainsIdentitySetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.get"></a>

```typescript
public get(index: number): IdentityDomainsIdentitySettingTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags">IdentityDomainsIdentitySettingTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsIdentitySettingTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags">IdentityDomainsIdentitySettingTags</a>[]

---


### IdentityDomainsIdentitySettingTagsOutputReference <a name="IdentityDomainsIdentitySettingTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer"></a>

```typescript
import { identityDomainsIdentitySetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags">IdentityDomainsIdentitySettingTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsIdentitySettingTags;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTags">IdentityDomainsIdentitySettingTags</a>

---


### IdentityDomainsIdentitySettingTimeoutsOutputReference <a name="IdentityDomainsIdentitySettingTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.Initializer"></a>

```typescript
import { identityDomainsIdentitySetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts">IdentityDomainsIdentitySettingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsIdentitySettingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTimeouts">IdentityDomainsIdentitySettingTimeouts</a>

---


### IdentityDomainsIdentitySettingTokensList <a name="IdentityDomainsIdentitySettingTokensList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.Initializer"></a>

```typescript
import { identityDomainsIdentitySetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.get"></a>

```typescript
public get(index: number): IdentityDomainsIdentitySettingTokensOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens">IdentityDomainsIdentitySettingTokens</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsIdentitySettingTokens[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens">IdentityDomainsIdentitySettingTokens</a>[]

---


### IdentityDomainsIdentitySettingTokensOutputReference <a name="IdentityDomainsIdentitySettingTokensOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer"></a>

```typescript
import { identityDomainsIdentitySetting } from 'rhizo-co-terraform-provider-oci'

new identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.resetExpiresAfter">resetExpiresAfter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpiresAfter` <a name="resetExpiresAfter" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.resetExpiresAfter"></a>

```typescript
public resetExpiresAfter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.expiresAfterInput">expiresAfterInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.expiresAfter">expiresAfter</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens">IdentityDomainsIdentitySettingTokens</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expiresAfterInput`<sup>Optional</sup> <a name="expiresAfterInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.expiresAfterInput"></a>

```typescript
public readonly expiresAfterInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `expiresAfter`<sup>Required</sup> <a name="expiresAfter" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.expiresAfter"></a>

```typescript
public readonly expiresAfter: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokensOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsIdentitySettingTokens;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentitySetting.IdentityDomainsIdentitySettingTokens">IdentityDomainsIdentitySettingTokens</a>

---



