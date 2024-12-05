# `identityDomainsOauthClientCertificate` Submodule <a name="`identityDomainsOauthClientCertificate` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsOauthClientCertificate <a name="IdentityDomainsOauthClientCertificate" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate oci_identity_domains_oauth_client_certificate}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer"></a>

```typescript
import { identityDomainsOauthClientCertificate } from 'rhizo-co-terraform-provider-oci'

new identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate(scope: Construct, id: string, config: IdentityDomainsOauthClientCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig">IdentityDomainsOauthClientCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig">IdentityDomainsOauthClientCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.putTags">putTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetKeyStoreId">resetKeyStoreId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetKeyStoreName">resetKeyStoreName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetKeyStorePassword">resetKeyStorePassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetMap">resetMap</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetOcid">resetOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.putTags"></a>

```typescript
public putTags(value: IResolvable | IdentityDomainsOauthClientCertificateTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.putTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTags">IdentityDomainsOauthClientCertificateTags</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.putTimeouts"></a>

```typescript
public putTimeouts(value: IdentityDomainsOauthClientCertificateTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeouts">IdentityDomainsOauthClientCertificateTimeouts</a>

---

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetExternalId` <a name="resetExternalId" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetExternalId"></a>

```typescript
public resetExternalId(): void
```

##### `resetKeyStoreId` <a name="resetKeyStoreId" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetKeyStoreId"></a>

```typescript
public resetKeyStoreId(): void
```

##### `resetKeyStoreName` <a name="resetKeyStoreName" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetKeyStoreName"></a>

```typescript
public resetKeyStoreName(): void
```

##### `resetKeyStorePassword` <a name="resetKeyStorePassword" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetKeyStorePassword"></a>

```typescript
public resetKeyStorePassword(): void
```

##### `resetMap` <a name="resetMap" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetMap"></a>

```typescript
public resetMap(): void
```

##### `resetOcid` <a name="resetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetOcid"></a>

```typescript
public resetOcid(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

##### `resetTags` <a name="resetTags" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityDomainsOauthClientCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.isConstruct"></a>

```typescript
import { identityDomainsOauthClientCertificate } from 'rhizo-co-terraform-provider-oci'

identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.isTerraformElement"></a>

```typescript
import { identityDomainsOauthClientCertificate } from 'rhizo-co-terraform-provider-oci'

identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.isTerraformResource"></a>

```typescript
import { identityDomainsOauthClientCertificate } from 'rhizo-co-terraform-provider-oci'

identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.generateConfigForImport"></a>

```typescript
import { identityDomainsOauthClientCertificate } from 'rhizo-co-terraform-provider-oci'

identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IdentityDomainsOauthClientCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityDomainsOauthClientCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityDomainsOauthClientCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsOauthClientCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.certEndDate">certEndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.certStartDate">certStartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList">IdentityDomainsOauthClientCertificateIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList">IdentityDomainsOauthClientCertificateIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList">IdentityDomainsOauthClientCertificateMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.sha1Thumbprint">sha1Thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.sha256Thumbprint">sha256Thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList">IdentityDomainsOauthClientCertificateTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference">IdentityDomainsOauthClientCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.certificateAliasInput">certificateAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.keyStoreIdInput">keyStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.keyStoreNameInput">keyStoreNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.keyStorePasswordInput">keyStorePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.mapInput">mapInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.ocidInput">ocidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.schemasInput">schemasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.tagsInput">tagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTags">IdentityDomainsOauthClientCertificateTags</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeouts">IdentityDomainsOauthClientCertificateTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.x509Base64CertificateInput">x509Base64CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.certificateAlias">certificateAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.keyStoreId">keyStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.keyStoreName">keyStoreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.keyStorePassword">keyStorePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.map">map</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.x509Base64Certificate">x509Base64Certificate</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certEndDate`<sup>Required</sup> <a name="certEndDate" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.certEndDate"></a>

```typescript
public readonly certEndDate: string;
```

- *Type:* string

---

##### `certStartDate`<sup>Required</sup> <a name="certStartDate" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.certStartDate"></a>

```typescript
public readonly certStartDate: string;
```

- *Type:* string

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: IdentityDomainsOauthClientCertificateIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList">IdentityDomainsOauthClientCertificateIdcsCreatedByList</a>

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: IdentityDomainsOauthClientCertificateIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList">IdentityDomainsOauthClientCertificateIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.meta"></a>

```typescript
public readonly meta: IdentityDomainsOauthClientCertificateMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList">IdentityDomainsOauthClientCertificateMetaList</a>

---

##### `sha1Thumbprint`<sup>Required</sup> <a name="sha1Thumbprint" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.sha1Thumbprint"></a>

```typescript
public readonly sha1Thumbprint: string;
```

- *Type:* string

---

##### `sha256Thumbprint`<sup>Required</sup> <a name="sha256Thumbprint" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.sha256Thumbprint"></a>

```typescript
public readonly sha256Thumbprint: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.tags"></a>

```typescript
public readonly tags: IdentityDomainsOauthClientCertificateTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList">IdentityDomainsOauthClientCertificateTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.timeouts"></a>

```typescript
public readonly timeouts: IdentityDomainsOauthClientCertificateTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference">IdentityDomainsOauthClientCertificateTimeoutsOutputReference</a>

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `certificateAliasInput`<sup>Optional</sup> <a name="certificateAliasInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.certificateAliasInput"></a>

```typescript
public readonly certificateAliasInput: string;
```

- *Type:* string

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `keyStoreIdInput`<sup>Optional</sup> <a name="keyStoreIdInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.keyStoreIdInput"></a>

```typescript
public readonly keyStoreIdInput: string;
```

- *Type:* string

---

##### `keyStoreNameInput`<sup>Optional</sup> <a name="keyStoreNameInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.keyStoreNameInput"></a>

```typescript
public readonly keyStoreNameInput: string;
```

- *Type:* string

---

##### `keyStorePasswordInput`<sup>Optional</sup> <a name="keyStorePasswordInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.keyStorePasswordInput"></a>

```typescript
public readonly keyStorePasswordInput: string;
```

- *Type:* string

---

##### `mapInput`<sup>Optional</sup> <a name="mapInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.mapInput"></a>

```typescript
public readonly mapInput: string;
```

- *Type:* string

---

##### `ocidInput`<sup>Optional</sup> <a name="ocidInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.ocidInput"></a>

```typescript
public readonly ocidInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `schemasInput`<sup>Optional</sup> <a name="schemasInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.schemasInput"></a>

```typescript
public readonly schemasInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IdentityDomainsOauthClientCertificateTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTags">IdentityDomainsOauthClientCertificateTags</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IdentityDomainsOauthClientCertificateTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeouts">IdentityDomainsOauthClientCertificateTimeouts</a>

---

##### `x509Base64CertificateInput`<sup>Optional</sup> <a name="x509Base64CertificateInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.x509Base64CertificateInput"></a>

```typescript
public readonly x509Base64CertificateInput: string;
```

- *Type:* string

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `certificateAlias`<sup>Required</sup> <a name="certificateAlias" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.certificateAlias"></a>

```typescript
public readonly certificateAlias: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `keyStoreId`<sup>Required</sup> <a name="keyStoreId" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.keyStoreId"></a>

```typescript
public readonly keyStoreId: string;
```

- *Type:* string

---

##### `keyStoreName`<sup>Required</sup> <a name="keyStoreName" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.keyStoreName"></a>

```typescript
public readonly keyStoreName: string;
```

- *Type:* string

---

##### `keyStorePassword`<sup>Required</sup> <a name="keyStorePassword" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.keyStorePassword"></a>

```typescript
public readonly keyStorePassword: string;
```

- *Type:* string

---

##### `map`<sup>Required</sup> <a name="map" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.map"></a>

```typescript
public readonly map: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `x509Base64Certificate`<sup>Required</sup> <a name="x509Base64Certificate" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.x509Base64Certificate"></a>

```typescript
public readonly x509Base64Certificate: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsOauthClientCertificateConfig <a name="IdentityDomainsOauthClientCertificateConfig" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.Initializer"></a>

```typescript
import { identityDomainsOauthClientCertificate } from 'rhizo-co-terraform-provider-oci'

const identityDomainsOauthClientCertificateConfig: identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.certificateAlias">certificateAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#certificate_alias IdentityDomainsOauthClientCertificate#certificate_alias}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#idcs_endpoint IdentityDomainsOauthClientCertificate#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.schemas">schemas</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#schemas IdentityDomainsOauthClientCertificate#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.x509Base64Certificate">x509Base64Certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#x509base64certificate IdentityDomainsOauthClientCertificate#x509base64certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#authorization IdentityDomainsOauthClientCertificate#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.externalId">externalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#external_id IdentityDomainsOauthClientCertificate#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.keyStoreId">keyStoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#key_store_id IdentityDomainsOauthClientCertificate#key_store_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.keyStoreName">keyStoreName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#key_store_name IdentityDomainsOauthClientCertificate#key_store_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.keyStorePassword">keyStorePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#key_store_password IdentityDomainsOauthClientCertificate#key_store_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.map">map</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#map IdentityDomainsOauthClientCertificate#map}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.ocid">ocid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#ocid IdentityDomainsOauthClientCertificate#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#resource_type_schema_version IdentityDomainsOauthClientCertificate#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.tags">tags</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTags">IdentityDomainsOauthClientCertificateTags</a>[]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeouts">IdentityDomainsOauthClientCertificateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificateAlias`<sup>Required</sup> <a name="certificateAlias" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.certificateAlias"></a>

```typescript
public readonly certificateAlias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#certificate_alias IdentityDomainsOauthClientCertificate#certificate_alias}.

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#idcs_endpoint IdentityDomainsOauthClientCertificate#idcs_endpoint}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#schemas IdentityDomainsOauthClientCertificate#schemas}.

---

##### `x509Base64Certificate`<sup>Required</sup> <a name="x509Base64Certificate" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.x509Base64Certificate"></a>

```typescript
public readonly x509Base64Certificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#x509base64certificate IdentityDomainsOauthClientCertificate#x509base64certificate}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#authorization IdentityDomainsOauthClientCertificate#authorization}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#external_id IdentityDomainsOauthClientCertificate#external_id}.

---

##### `keyStoreId`<sup>Optional</sup> <a name="keyStoreId" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.keyStoreId"></a>

```typescript
public readonly keyStoreId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#key_store_id IdentityDomainsOauthClientCertificate#key_store_id}.

---

##### `keyStoreName`<sup>Optional</sup> <a name="keyStoreName" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.keyStoreName"></a>

```typescript
public readonly keyStoreName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#key_store_name IdentityDomainsOauthClientCertificate#key_store_name}.

---

##### `keyStorePassword`<sup>Optional</sup> <a name="keyStorePassword" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.keyStorePassword"></a>

```typescript
public readonly keyStorePassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#key_store_password IdentityDomainsOauthClientCertificate#key_store_password}.

---

##### `map`<sup>Optional</sup> <a name="map" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.map"></a>

```typescript
public readonly map: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#map IdentityDomainsOauthClientCertificate#map}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#ocid IdentityDomainsOauthClientCertificate#ocid}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#resource_type_schema_version IdentityDomainsOauthClientCertificate#resource_type_schema_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IdentityDomainsOauthClientCertificateTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTags">IdentityDomainsOauthClientCertificateTags</a>[]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#tags IdentityDomainsOauthClientCertificate#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IdentityDomainsOauthClientCertificateTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeouts">IdentityDomainsOauthClientCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#timeouts IdentityDomainsOauthClientCertificate#timeouts}

---

### IdentityDomainsOauthClientCertificateIdcsCreatedBy <a name="IdentityDomainsOauthClientCertificateIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedBy.Initializer"></a>

```typescript
import { identityDomainsOauthClientCertificate } from 'rhizo-co-terraform-provider-oci'

const identityDomainsOauthClientCertificateIdcsCreatedBy: identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedBy = { ... }
```


### IdentityDomainsOauthClientCertificateIdcsLastModifiedBy <a name="IdentityDomainsOauthClientCertificateIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedBy.Initializer"></a>

```typescript
import { identityDomainsOauthClientCertificate } from 'rhizo-co-terraform-provider-oci'

const identityDomainsOauthClientCertificateIdcsLastModifiedBy: identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedBy = { ... }
```


### IdentityDomainsOauthClientCertificateMeta <a name="IdentityDomainsOauthClientCertificateMeta" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMeta.Initializer"></a>

```typescript
import { identityDomainsOauthClientCertificate } from 'rhizo-co-terraform-provider-oci'

const identityDomainsOauthClientCertificateMeta: identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMeta = { ... }
```


### IdentityDomainsOauthClientCertificateTags <a name="IdentityDomainsOauthClientCertificateTags" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTags.Initializer"></a>

```typescript
import { identityDomainsOauthClientCertificate } from 'rhizo-co-terraform-provider-oci'

const identityDomainsOauthClientCertificateTags: identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#key IdentityDomainsOauthClientCertificate#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#value IdentityDomainsOauthClientCertificate#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#key IdentityDomainsOauthClientCertificate#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#value IdentityDomainsOauthClientCertificate#value}.

---

### IdentityDomainsOauthClientCertificateTimeouts <a name="IdentityDomainsOauthClientCertificateTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeouts.Initializer"></a>

```typescript
import { identityDomainsOauthClientCertificate } from 'rhizo-co-terraform-provider-oci'

const identityDomainsOauthClientCertificateTimeouts: identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#create IdentityDomainsOauthClientCertificate#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#delete IdentityDomainsOauthClientCertificate#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#update IdentityDomainsOauthClientCertificate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#create IdentityDomainsOauthClientCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#delete IdentityDomainsOauthClientCertificate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_oauth_client_certificate#update IdentityDomainsOauthClientCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsOauthClientCertificateIdcsCreatedByList <a name="IdentityDomainsOauthClientCertificateIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.Initializer"></a>

```typescript
import { identityDomainsOauthClientCertificate } from 'rhizo-co-terraform-provider-oci'

new identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.get"></a>

```typescript
public get(index: number): IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference <a name="IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { identityDomainsOauthClientCertificate } from 'rhizo-co-terraform-provider-oci'

new identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedBy">IdentityDomainsOauthClientCertificateIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsOauthClientCertificateIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsCreatedBy">IdentityDomainsOauthClientCertificateIdcsCreatedBy</a>

---


### IdentityDomainsOauthClientCertificateIdcsLastModifiedByList <a name="IdentityDomainsOauthClientCertificateIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.Initializer"></a>

```typescript
import { identityDomainsOauthClientCertificate } from 'rhizo-co-terraform-provider-oci'

new identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference <a name="IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { identityDomainsOauthClientCertificate } from 'rhizo-co-terraform-provider-oci'

new identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedBy">IdentityDomainsOauthClientCertificateIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsOauthClientCertificateIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateIdcsLastModifiedBy">IdentityDomainsOauthClientCertificateIdcsLastModifiedBy</a>

---


### IdentityDomainsOauthClientCertificateMetaList <a name="IdentityDomainsOauthClientCertificateMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.Initializer"></a>

```typescript
import { identityDomainsOauthClientCertificate } from 'rhizo-co-terraform-provider-oci'

new identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.get"></a>

```typescript
public get(index: number): IdentityDomainsOauthClientCertificateMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityDomainsOauthClientCertificateMetaOutputReference <a name="IdentityDomainsOauthClientCertificateMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.Initializer"></a>

```typescript
import { identityDomainsOauthClientCertificate } from 'rhizo-co-terraform-provider-oci'

new identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMeta">IdentityDomainsOauthClientCertificateMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsOauthClientCertificateMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateMeta">IdentityDomainsOauthClientCertificateMeta</a>

---


### IdentityDomainsOauthClientCertificateTagsList <a name="IdentityDomainsOauthClientCertificateTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.Initializer"></a>

```typescript
import { identityDomainsOauthClientCertificate } from 'rhizo-co-terraform-provider-oci'

new identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.get"></a>

```typescript
public get(index: number): IdentityDomainsOauthClientCertificateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTags">IdentityDomainsOauthClientCertificateTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsOauthClientCertificateTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTags">IdentityDomainsOauthClientCertificateTags</a>[]

---


### IdentityDomainsOauthClientCertificateTagsOutputReference <a name="IdentityDomainsOauthClientCertificateTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.Initializer"></a>

```typescript
import { identityDomainsOauthClientCertificate } from 'rhizo-co-terraform-provider-oci'

new identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTags">IdentityDomainsOauthClientCertificateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsOauthClientCertificateTags;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTags">IdentityDomainsOauthClientCertificateTags</a>

---


### IdentityDomainsOauthClientCertificateTimeoutsOutputReference <a name="IdentityDomainsOauthClientCertificateTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.Initializer"></a>

```typescript
import { identityDomainsOauthClientCertificate } from 'rhizo-co-terraform-provider-oci'

new identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeouts">IdentityDomainsOauthClientCertificateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsOauthClientCertificateTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsOauthClientCertificate.IdentityDomainsOauthClientCertificateTimeouts">IdentityDomainsOauthClientCertificateTimeouts</a>

---



