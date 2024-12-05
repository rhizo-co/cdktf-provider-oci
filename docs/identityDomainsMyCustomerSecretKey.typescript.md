# `identityDomainsMyCustomerSecretKey` Submodule <a name="`identityDomainsMyCustomerSecretKey` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsMyCustomerSecretKey <a name="IdentityDomainsMyCustomerSecretKey" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key oci_identity_domains_my_customer_secret_key}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.Initializer"></a>

```typescript
import { identityDomainsMyCustomerSecretKey } from 'rhizo-co-terraform-provider-oci'

new identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey(scope: Construct, id: string, config: IdentityDomainsMyCustomerSecretKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig">IdentityDomainsMyCustomerSecretKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig">IdentityDomainsMyCustomerSecretKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.putTags">putTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.putUser">putUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.resetExpiresOn">resetExpiresOn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.resetOcid">resetOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.resetUser">resetUser</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.putTags"></a>

```typescript
public putTags(value: IResolvable | IdentityDomainsMyCustomerSecretKeyTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.putTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTags">IdentityDomainsMyCustomerSecretKeyTags</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.putTimeouts"></a>

```typescript
public putTimeouts(value: IdentityDomainsMyCustomerSecretKeyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeouts">IdentityDomainsMyCustomerSecretKeyTimeouts</a>

---

##### `putUser` <a name="putUser" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.putUser"></a>

```typescript
public putUser(value: IdentityDomainsMyCustomerSecretKeyUser): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.putUser.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUser">IdentityDomainsMyCustomerSecretKeyUser</a>

---

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetExpiresOn` <a name="resetExpiresOn" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.resetExpiresOn"></a>

```typescript
public resetExpiresOn(): void
```

##### `resetOcid` <a name="resetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.resetOcid"></a>

```typescript
public resetOcid(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTags` <a name="resetTags" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUser` <a name="resetUser" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.resetUser"></a>

```typescript
public resetUser(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityDomainsMyCustomerSecretKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.isConstruct"></a>

```typescript
import { identityDomainsMyCustomerSecretKey } from 'rhizo-co-terraform-provider-oci'

identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.isTerraformElement"></a>

```typescript
import { identityDomainsMyCustomerSecretKey } from 'rhizo-co-terraform-provider-oci'

identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.isTerraformResource"></a>

```typescript
import { identityDomainsMyCustomerSecretKey } from 'rhizo-co-terraform-provider-oci'

identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.generateConfigForImport"></a>

```typescript
import { identityDomainsMyCustomerSecretKey } from 'rhizo-co-terraform-provider-oci'

identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IdentityDomainsMyCustomerSecretKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityDomainsMyCustomerSecretKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityDomainsMyCustomerSecretKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsMyCustomerSecretKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.accessKey">accessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByList">IdentityDomainsMyCustomerSecretKeyIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByList">IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaList">IdentityDomainsMyCustomerSecretKeyMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsList">IdentityDomainsMyCustomerSecretKeyTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference">IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference">IdentityDomainsMyCustomerSecretKeyUserOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.expiresOnInput">expiresOnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.ocidInput">ocidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.schemasInput">schemasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.tagsInput">tagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTags">IdentityDomainsMyCustomerSecretKeyTags</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeouts">IdentityDomainsMyCustomerSecretKeyTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.userInput">userInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUser">IdentityDomainsMyCustomerSecretKeyUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.expiresOn">expiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: IdentityDomainsMyCustomerSecretKeyIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByList">IdentityDomainsMyCustomerSecretKeyIdcsCreatedByList</a>

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByList">IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.meta"></a>

```typescript
public readonly meta: IdentityDomainsMyCustomerSecretKeyMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaList">IdentityDomainsMyCustomerSecretKeyMetaList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.tags"></a>

```typescript
public readonly tags: IdentityDomainsMyCustomerSecretKeyTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsList">IdentityDomainsMyCustomerSecretKeyTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.timeouts"></a>

```typescript
public readonly timeouts: IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference">IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference</a>

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.user"></a>

```typescript
public readonly user: IdentityDomainsMyCustomerSecretKeyUserOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference">IdentityDomainsMyCustomerSecretKeyUserOutputReference</a>

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `expiresOnInput`<sup>Optional</sup> <a name="expiresOnInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.expiresOnInput"></a>

```typescript
public readonly expiresOnInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `ocidInput`<sup>Optional</sup> <a name="ocidInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.ocidInput"></a>

```typescript
public readonly ocidInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `schemasInput`<sup>Optional</sup> <a name="schemasInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.schemasInput"></a>

```typescript
public readonly schemasInput: string[];
```

- *Type:* string[]

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IdentityDomainsMyCustomerSecretKeyTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTags">IdentityDomainsMyCustomerSecretKeyTags</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IdentityDomainsMyCustomerSecretKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeouts">IdentityDomainsMyCustomerSecretKeyTimeouts</a>

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.userInput"></a>

```typescript
public readonly userInput: IdentityDomainsMyCustomerSecretKeyUser;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUser">IdentityDomainsMyCustomerSecretKeyUser</a>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsMyCustomerSecretKeyConfig <a name="IdentityDomainsMyCustomerSecretKeyConfig" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.Initializer"></a>

```typescript
import { identityDomainsMyCustomerSecretKey } from 'rhizo-co-terraform-provider-oci'

const identityDomainsMyCustomerSecretKeyConfig: identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#idcs_endpoint IdentityDomainsMyCustomerSecretKey#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.schemas">schemas</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#schemas IdentityDomainsMyCustomerSecretKey#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#authorization IdentityDomainsMyCustomerSecretKey#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#description IdentityDomainsMyCustomerSecretKey#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#display_name IdentityDomainsMyCustomerSecretKey#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.expiresOn">expiresOn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#expires_on IdentityDomainsMyCustomerSecretKey#expires_on}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.ocid">ocid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#ocid IdentityDomainsMyCustomerSecretKey#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#resource_type_schema_version IdentityDomainsMyCustomerSecretKey#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#status IdentityDomainsMyCustomerSecretKey#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.tags">tags</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTags">IdentityDomainsMyCustomerSecretKeyTags</a>[]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeouts">IdentityDomainsMyCustomerSecretKeyTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUser">IdentityDomainsMyCustomerSecretKeyUser</a></code> | user block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#idcs_endpoint IdentityDomainsMyCustomerSecretKey#idcs_endpoint}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#schemas IdentityDomainsMyCustomerSecretKey#schemas}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#authorization IdentityDomainsMyCustomerSecretKey#authorization}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#description IdentityDomainsMyCustomerSecretKey#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#display_name IdentityDomainsMyCustomerSecretKey#display_name}.

---

##### `expiresOn`<sup>Optional</sup> <a name="expiresOn" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#expires_on IdentityDomainsMyCustomerSecretKey#expires_on}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#ocid IdentityDomainsMyCustomerSecretKey#ocid}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#resource_type_schema_version IdentityDomainsMyCustomerSecretKey#resource_type_schema_version}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#status IdentityDomainsMyCustomerSecretKey#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IdentityDomainsMyCustomerSecretKeyTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTags">IdentityDomainsMyCustomerSecretKeyTags</a>[]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#tags IdentityDomainsMyCustomerSecretKey#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IdentityDomainsMyCustomerSecretKeyTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeouts">IdentityDomainsMyCustomerSecretKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#timeouts IdentityDomainsMyCustomerSecretKey#timeouts}

---

##### `user`<sup>Optional</sup> <a name="user" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyConfig.property.user"></a>

```typescript
public readonly user: IdentityDomainsMyCustomerSecretKeyUser;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUser">IdentityDomainsMyCustomerSecretKeyUser</a>

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#user IdentityDomainsMyCustomerSecretKey#user}

---

### IdentityDomainsMyCustomerSecretKeyIdcsCreatedBy <a name="IdentityDomainsMyCustomerSecretKeyIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedBy.Initializer"></a>

```typescript
import { identityDomainsMyCustomerSecretKey } from 'rhizo-co-terraform-provider-oci'

const identityDomainsMyCustomerSecretKeyIdcsCreatedBy: identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedBy = { ... }
```


### IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedBy <a name="IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedBy.Initializer"></a>

```typescript
import { identityDomainsMyCustomerSecretKey } from 'rhizo-co-terraform-provider-oci'

const identityDomainsMyCustomerSecretKeyIdcsLastModifiedBy: identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedBy = { ... }
```


### IdentityDomainsMyCustomerSecretKeyMeta <a name="IdentityDomainsMyCustomerSecretKeyMeta" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMeta.Initializer"></a>

```typescript
import { identityDomainsMyCustomerSecretKey } from 'rhizo-co-terraform-provider-oci'

const identityDomainsMyCustomerSecretKeyMeta: identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMeta = { ... }
```


### IdentityDomainsMyCustomerSecretKeyTags <a name="IdentityDomainsMyCustomerSecretKeyTags" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTags.Initializer"></a>

```typescript
import { identityDomainsMyCustomerSecretKey } from 'rhizo-co-terraform-provider-oci'

const identityDomainsMyCustomerSecretKeyTags: identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#key IdentityDomainsMyCustomerSecretKey#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#value IdentityDomainsMyCustomerSecretKey#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#key IdentityDomainsMyCustomerSecretKey#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#value IdentityDomainsMyCustomerSecretKey#value}.

---

### IdentityDomainsMyCustomerSecretKeyTimeouts <a name="IdentityDomainsMyCustomerSecretKeyTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeouts.Initializer"></a>

```typescript
import { identityDomainsMyCustomerSecretKey } from 'rhizo-co-terraform-provider-oci'

const identityDomainsMyCustomerSecretKeyTimeouts: identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#create IdentityDomainsMyCustomerSecretKey#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#delete IdentityDomainsMyCustomerSecretKey#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#update IdentityDomainsMyCustomerSecretKey#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#create IdentityDomainsMyCustomerSecretKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#delete IdentityDomainsMyCustomerSecretKey#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#update IdentityDomainsMyCustomerSecretKey#update}.

---

### IdentityDomainsMyCustomerSecretKeyUser <a name="IdentityDomainsMyCustomerSecretKeyUser" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUser.Initializer"></a>

```typescript
import { identityDomainsMyCustomerSecretKey } from 'rhizo-co-terraform-provider-oci'

const identityDomainsMyCustomerSecretKeyUser: identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUser = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUser.property.ocid">ocid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#ocid IdentityDomainsMyCustomerSecretKey#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUser.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#value IdentityDomainsMyCustomerSecretKey#value}. |

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUser.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#ocid IdentityDomainsMyCustomerSecretKey#ocid}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUser.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_my_customer_secret_key#value IdentityDomainsMyCustomerSecretKey#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsMyCustomerSecretKeyIdcsCreatedByList <a name="IdentityDomainsMyCustomerSecretKeyIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByList.Initializer"></a>

```typescript
import { identityDomainsMyCustomerSecretKey } from 'rhizo-co-terraform-provider-oci'

new identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByList.get"></a>

```typescript
public get(index: number): IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference <a name="IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { identityDomainsMyCustomerSecretKey } from 'rhizo-co-terraform-provider-oci'

new identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedBy">IdentityDomainsMyCustomerSecretKeyIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsMyCustomerSecretKeyIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsCreatedBy">IdentityDomainsMyCustomerSecretKeyIdcsCreatedBy</a>

---


### IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByList <a name="IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByList.Initializer"></a>

```typescript
import { identityDomainsMyCustomerSecretKey } from 'rhizo-co-terraform-provider-oci'

new identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference <a name="IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { identityDomainsMyCustomerSecretKey } from 'rhizo-co-terraform-provider-oci'

new identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedBy">IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedBy">IdentityDomainsMyCustomerSecretKeyIdcsLastModifiedBy</a>

---


### IdentityDomainsMyCustomerSecretKeyMetaList <a name="IdentityDomainsMyCustomerSecretKeyMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaList.Initializer"></a>

```typescript
import { identityDomainsMyCustomerSecretKey } from 'rhizo-co-terraform-provider-oci'

new identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaList.get"></a>

```typescript
public get(index: number): IdentityDomainsMyCustomerSecretKeyMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityDomainsMyCustomerSecretKeyMetaOutputReference <a name="IdentityDomainsMyCustomerSecretKeyMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.Initializer"></a>

```typescript
import { identityDomainsMyCustomerSecretKey } from 'rhizo-co-terraform-provider-oci'

new identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMeta">IdentityDomainsMyCustomerSecretKeyMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsMyCustomerSecretKeyMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyMeta">IdentityDomainsMyCustomerSecretKeyMeta</a>

---


### IdentityDomainsMyCustomerSecretKeyTagsList <a name="IdentityDomainsMyCustomerSecretKeyTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsList.Initializer"></a>

```typescript
import { identityDomainsMyCustomerSecretKey } from 'rhizo-co-terraform-provider-oci'

new identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsList.get"></a>

```typescript
public get(index: number): IdentityDomainsMyCustomerSecretKeyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTags">IdentityDomainsMyCustomerSecretKeyTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsMyCustomerSecretKeyTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTags">IdentityDomainsMyCustomerSecretKeyTags</a>[]

---


### IdentityDomainsMyCustomerSecretKeyTagsOutputReference <a name="IdentityDomainsMyCustomerSecretKeyTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.Initializer"></a>

```typescript
import { identityDomainsMyCustomerSecretKey } from 'rhizo-co-terraform-provider-oci'

new identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTags">IdentityDomainsMyCustomerSecretKeyTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsMyCustomerSecretKeyTags;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTags">IdentityDomainsMyCustomerSecretKeyTags</a>

---


### IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference <a name="IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.Initializer"></a>

```typescript
import { identityDomainsMyCustomerSecretKey } from 'rhizo-co-terraform-provider-oci'

new identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeouts">IdentityDomainsMyCustomerSecretKeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsMyCustomerSecretKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyTimeouts">IdentityDomainsMyCustomerSecretKeyTimeouts</a>

---


### IdentityDomainsMyCustomerSecretKeyUserOutputReference <a name="IdentityDomainsMyCustomerSecretKeyUserOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.Initializer"></a>

```typescript
import { identityDomainsMyCustomerSecretKey } from 'rhizo-co-terraform-provider-oci'

new identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.resetOcid">resetOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOcid` <a name="resetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.resetOcid"></a>

```typescript
public resetOcid(): void
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.property.ocidInput">ocidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUser">IdentityDomainsMyCustomerSecretKeyUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `ocidInput`<sup>Optional</sup> <a name="ocidInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.property.ocidInput"></a>

```typescript
public readonly ocidInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsMyCustomerSecretKeyUser;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsMyCustomerSecretKey.IdentityDomainsMyCustomerSecretKeyUser">IdentityDomainsMyCustomerSecretKeyUser</a>

---



