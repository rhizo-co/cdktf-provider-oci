# `identityDomainsSmtpCredential` Submodule <a name="`identityDomainsSmtpCredential` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsSmtpCredential <a name="IdentityDomainsSmtpCredential" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential oci_identity_domains_smtp_credential}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.Initializer"></a>

```typescript
import { identityDomainsSmtpCredential } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSmtpCredential.IdentityDomainsSmtpCredential(scope: Construct, id: string, config: IdentityDomainsSmtpCredentialConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig">IdentityDomainsSmtpCredentialConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig">IdentityDomainsSmtpCredentialConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.putTags">putTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.putUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">putUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.putUser">putUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.resetExpiresOn">resetExpiresOn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.resetOcid">resetOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.resetUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">resetUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.resetUser">resetUser</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.putTags"></a>

```typescript
public putTags(value: IResolvable | IdentityDomainsSmtpCredentialTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.putTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTags">IdentityDomainsSmtpCredentialTags</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.putTimeouts"></a>

```typescript
public putTimeouts(value: IdentityDomainsSmtpCredentialTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeouts">IdentityDomainsSmtpCredentialTimeouts</a>

---

##### `putUrnietfparamsscimschemasoracleidcsextensionselfChangeUser` <a name="putUrnietfparamsscimschemasoracleidcsextensionselfChangeUser" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.putUrnietfparamsscimschemasoracleidcsextensionselfChangeUser"></a>

```typescript
public putUrnietfparamsscimschemasoracleidcsextensionselfChangeUser(value: IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUser): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.putUrnietfparamsscimschemasoracleidcsextensionselfChangeUser.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a>

---

##### `putUser` <a name="putUser" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.putUser"></a>

```typescript
public putUser(value: IdentityDomainsSmtpCredentialUser): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.putUser.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUser">IdentityDomainsSmtpCredentialUser</a>

---

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.resetAttributeSets"></a>

```typescript
public resetAttributeSets(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExpiresOn` <a name="resetExpiresOn" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.resetExpiresOn"></a>

```typescript
public resetExpiresOn(): void
```

##### `resetOcid` <a name="resetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.resetOcid"></a>

```typescript
public resetOcid(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTags` <a name="resetTags" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUrnietfparamsscimschemasoracleidcsextensionselfChangeUser` <a name="resetUrnietfparamsscimschemasoracleidcsextensionselfChangeUser" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.resetUrnietfparamsscimschemasoracleidcsextensionselfChangeUser"></a>

```typescript
public resetUrnietfparamsscimschemasoracleidcsextensionselfChangeUser(): void
```

##### `resetUser` <a name="resetUser" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.resetUser"></a>

```typescript
public resetUser(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityDomainsSmtpCredential resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.isConstruct"></a>

```typescript
import { identityDomainsSmtpCredential } from 'rhizo-co-terraform-provider-oci'

identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.isTerraformElement"></a>

```typescript
import { identityDomainsSmtpCredential } from 'rhizo-co-terraform-provider-oci'

identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.isTerraformResource"></a>

```typescript
import { identityDomainsSmtpCredential } from 'rhizo-co-terraform-provider-oci'

identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.generateConfigForImport"></a>

```typescript
import { identityDomainsSmtpCredential } from 'rhizo-co-terraform-provider-oci'

identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IdentityDomainsSmtpCredential resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityDomainsSmtpCredential to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityDomainsSmtpCredential that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsSmtpCredential to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByList">IdentityDomainsSmtpCredentialIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByList">IdentityDomainsSmtpCredentialIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaList">IdentityDomainsSmtpCredentialMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsList">IdentityDomainsSmtpCredentialTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference">IdentityDomainsSmtpCredentialTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.urnietfparamsscimschemasoracleidcsextensionselfChangeUser">urnietfparamsscimschemasoracleidcsextensionselfChangeUser</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference">IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference">IdentityDomainsSmtpCredentialUserOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.attributeSetsInput">attributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.attributesInput">attributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.expiresOnInput">expiresOnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.ocidInput">ocidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.schemasInput">schemasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.tagsInput">tagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTags">IdentityDomainsSmtpCredentialTags</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeouts">IdentityDomainsSmtpCredentialTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.urnietfparamsscimschemasoracleidcsextensionselfChangeUserInput">urnietfparamsscimschemasoracleidcsextensionselfChangeUserInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.userInput">userInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUser">IdentityDomainsSmtpCredentialUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.expiresOn">expiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: IdentityDomainsSmtpCredentialIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByList">IdentityDomainsSmtpCredentialIdcsCreatedByList</a>

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: IdentityDomainsSmtpCredentialIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByList">IdentityDomainsSmtpCredentialIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.meta"></a>

```typescript
public readonly meta: IdentityDomainsSmtpCredentialMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaList">IdentityDomainsSmtpCredentialMetaList</a>

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.tags"></a>

```typescript
public readonly tags: IdentityDomainsSmtpCredentialTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsList">IdentityDomainsSmtpCredentialTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.timeouts"></a>

```typescript
public readonly timeouts: IdentityDomainsSmtpCredentialTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference">IdentityDomainsSmtpCredentialTimeoutsOutputReference</a>

---

##### `urnietfparamsscimschemasoracleidcsextensionselfChangeUser`<sup>Required</sup> <a name="urnietfparamsscimschemasoracleidcsextensionselfChangeUser" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.urnietfparamsscimschemasoracleidcsextensionselfChangeUser"></a>

```typescript
public readonly urnietfparamsscimschemasoracleidcsextensionselfChangeUser: IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference">IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference</a>

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.user"></a>

```typescript
public readonly user: IdentityDomainsSmtpCredentialUserOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference">IdentityDomainsSmtpCredentialUserOutputReference</a>

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.attributeSetsInput"></a>

```typescript
public readonly attributeSetsInput: string[];
```

- *Type:* string[]

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.attributesInput"></a>

```typescript
public readonly attributesInput: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expiresOnInput`<sup>Optional</sup> <a name="expiresOnInput" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.expiresOnInput"></a>

```typescript
public readonly expiresOnInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `ocidInput`<sup>Optional</sup> <a name="ocidInput" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.ocidInput"></a>

```typescript
public readonly ocidInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `schemasInput`<sup>Optional</sup> <a name="schemasInput" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.schemasInput"></a>

```typescript
public readonly schemasInput: string[];
```

- *Type:* string[]

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IdentityDomainsSmtpCredentialTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTags">IdentityDomainsSmtpCredentialTags</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IdentityDomainsSmtpCredentialTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeouts">IdentityDomainsSmtpCredentialTimeouts</a>

---

##### `urnietfparamsscimschemasoracleidcsextensionselfChangeUserInput`<sup>Optional</sup> <a name="urnietfparamsscimschemasoracleidcsextensionselfChangeUserInput" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.urnietfparamsscimschemasoracleidcsextensionselfChangeUserInput"></a>

```typescript
public readonly urnietfparamsscimschemasoracleidcsextensionselfChangeUserInput: IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUser;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a>

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.userInput"></a>

```typescript
public readonly userInput: IdentityDomainsSmtpCredentialUser;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUser">IdentityDomainsSmtpCredentialUser</a>

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredential.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsSmtpCredentialConfig <a name="IdentityDomainsSmtpCredentialConfig" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.Initializer"></a>

```typescript
import { identityDomainsSmtpCredential } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSmtpCredentialConfig: identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#idcs_endpoint IdentityDomainsSmtpCredential#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.schemas">schemas</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#schemas IdentityDomainsSmtpCredential#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.attributes">attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#attributes IdentityDomainsSmtpCredential#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#attribute_sets IdentityDomainsSmtpCredential#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#authorization IdentityDomainsSmtpCredential#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#description IdentityDomainsSmtpCredential#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.expiresOn">expiresOn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#expires_on IdentityDomainsSmtpCredential#expires_on}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.ocid">ocid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#ocid IdentityDomainsSmtpCredential#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#resource_type_schema_version IdentityDomainsSmtpCredential#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#status IdentityDomainsSmtpCredential#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.tags">tags</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTags">IdentityDomainsSmtpCredentialTags</a>[]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeouts">IdentityDomainsSmtpCredentialTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.urnietfparamsscimschemasoracleidcsextensionselfChangeUser">urnietfparamsscimschemasoracleidcsextensionselfChangeUser</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a></code> | urnietfparamsscimschemasoracleidcsextensionself_change_user block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUser">IdentityDomainsSmtpCredentialUser</a></code> | user block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#idcs_endpoint IdentityDomainsSmtpCredential#idcs_endpoint}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#schemas IdentityDomainsSmtpCredential#schemas}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#attributes IdentityDomainsSmtpCredential#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#attribute_sets IdentityDomainsSmtpCredential#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#authorization IdentityDomainsSmtpCredential#authorization}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#description IdentityDomainsSmtpCredential#description}.

---

##### `expiresOn`<sup>Optional</sup> <a name="expiresOn" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#expires_on IdentityDomainsSmtpCredential#expires_on}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#ocid IdentityDomainsSmtpCredential#ocid}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#resource_type_schema_version IdentityDomainsSmtpCredential#resource_type_schema_version}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#status IdentityDomainsSmtpCredential#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IdentityDomainsSmtpCredentialTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTags">IdentityDomainsSmtpCredentialTags</a>[]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#tags IdentityDomainsSmtpCredential#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IdentityDomainsSmtpCredentialTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeouts">IdentityDomainsSmtpCredentialTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#timeouts IdentityDomainsSmtpCredential#timeouts}

---

##### `urnietfparamsscimschemasoracleidcsextensionselfChangeUser`<sup>Optional</sup> <a name="urnietfparamsscimschemasoracleidcsextensionselfChangeUser" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.urnietfparamsscimschemasoracleidcsextensionselfChangeUser"></a>

```typescript
public readonly urnietfparamsscimschemasoracleidcsextensionselfChangeUser: IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUser;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a>

urnietfparamsscimschemasoracleidcsextensionself_change_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#urnietfparamsscimschemasoracleidcsextensionself_change_user IdentityDomainsSmtpCredential#urnietfparamsscimschemasoracleidcsextensionself_change_user}

---

##### `user`<sup>Optional</sup> <a name="user" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialConfig.property.user"></a>

```typescript
public readonly user: IdentityDomainsSmtpCredentialUser;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUser">IdentityDomainsSmtpCredentialUser</a>

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#user IdentityDomainsSmtpCredential#user}

---

### IdentityDomainsSmtpCredentialIdcsCreatedBy <a name="IdentityDomainsSmtpCredentialIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedBy.Initializer"></a>

```typescript
import { identityDomainsSmtpCredential } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSmtpCredentialIdcsCreatedBy: identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedBy = { ... }
```


### IdentityDomainsSmtpCredentialIdcsLastModifiedBy <a name="IdentityDomainsSmtpCredentialIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedBy.Initializer"></a>

```typescript
import { identityDomainsSmtpCredential } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSmtpCredentialIdcsLastModifiedBy: identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedBy = { ... }
```


### IdentityDomainsSmtpCredentialMeta <a name="IdentityDomainsSmtpCredentialMeta" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMeta.Initializer"></a>

```typescript
import { identityDomainsSmtpCredential } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSmtpCredentialMeta: identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMeta = { ... }
```


### IdentityDomainsSmtpCredentialTags <a name="IdentityDomainsSmtpCredentialTags" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTags.Initializer"></a>

```typescript
import { identityDomainsSmtpCredential } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSmtpCredentialTags: identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#key IdentityDomainsSmtpCredential#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#value IdentityDomainsSmtpCredential#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#key IdentityDomainsSmtpCredential#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#value IdentityDomainsSmtpCredential#value}.

---

### IdentityDomainsSmtpCredentialTimeouts <a name="IdentityDomainsSmtpCredentialTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeouts.Initializer"></a>

```typescript
import { identityDomainsSmtpCredential } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSmtpCredentialTimeouts: identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#create IdentityDomainsSmtpCredential#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#delete IdentityDomainsSmtpCredential#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#update IdentityDomainsSmtpCredential#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#create IdentityDomainsSmtpCredential#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#delete IdentityDomainsSmtpCredential#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#update IdentityDomainsSmtpCredential#update}.

---

### IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUser <a name="IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUser" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUser.Initializer"></a>

```typescript
import { identityDomainsSmtpCredential } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUser: identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUser = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUser.property.allowSelfChange">allowSelfChange</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#allow_self_change IdentityDomainsSmtpCredential#allow_self_change}. |

---

##### `allowSelfChange`<sup>Optional</sup> <a name="allowSelfChange" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUser.property.allowSelfChange"></a>

```typescript
public readonly allowSelfChange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#allow_self_change IdentityDomainsSmtpCredential#allow_self_change}.

---

### IdentityDomainsSmtpCredentialUser <a name="IdentityDomainsSmtpCredentialUser" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUser.Initializer"></a>

```typescript
import { identityDomainsSmtpCredential } from 'rhizo-co-terraform-provider-oci'

const identityDomainsSmtpCredentialUser: identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUser = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUser.property.ocid">ocid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#ocid IdentityDomainsSmtpCredential#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUser.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#value IdentityDomainsSmtpCredential#value}. |

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUser.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#ocid IdentityDomainsSmtpCredential#ocid}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUser.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_smtp_credential#value IdentityDomainsSmtpCredential#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsSmtpCredentialIdcsCreatedByList <a name="IdentityDomainsSmtpCredentialIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByList.Initializer"></a>

```typescript
import { identityDomainsSmtpCredential } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByList.get"></a>

```typescript
public get(index: number): IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference <a name="IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { identityDomainsSmtpCredential } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedBy">IdentityDomainsSmtpCredentialIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsSmtpCredentialIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsCreatedBy">IdentityDomainsSmtpCredentialIdcsCreatedBy</a>

---


### IdentityDomainsSmtpCredentialIdcsLastModifiedByList <a name="IdentityDomainsSmtpCredentialIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByList.Initializer"></a>

```typescript
import { identityDomainsSmtpCredential } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference <a name="IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { identityDomainsSmtpCredential } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedBy">IdentityDomainsSmtpCredentialIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsSmtpCredentialIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialIdcsLastModifiedBy">IdentityDomainsSmtpCredentialIdcsLastModifiedBy</a>

---


### IdentityDomainsSmtpCredentialMetaList <a name="IdentityDomainsSmtpCredentialMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaList.Initializer"></a>

```typescript
import { identityDomainsSmtpCredential } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaList.get"></a>

```typescript
public get(index: number): IdentityDomainsSmtpCredentialMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityDomainsSmtpCredentialMetaOutputReference <a name="IdentityDomainsSmtpCredentialMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.Initializer"></a>

```typescript
import { identityDomainsSmtpCredential } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMeta">IdentityDomainsSmtpCredentialMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsSmtpCredentialMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialMeta">IdentityDomainsSmtpCredentialMeta</a>

---


### IdentityDomainsSmtpCredentialTagsList <a name="IdentityDomainsSmtpCredentialTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsList.Initializer"></a>

```typescript
import { identityDomainsSmtpCredential } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsList.get"></a>

```typescript
public get(index: number): IdentityDomainsSmtpCredentialTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTags">IdentityDomainsSmtpCredentialTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsSmtpCredentialTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTags">IdentityDomainsSmtpCredentialTags</a>[]

---


### IdentityDomainsSmtpCredentialTagsOutputReference <a name="IdentityDomainsSmtpCredentialTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.Initializer"></a>

```typescript
import { identityDomainsSmtpCredential } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTags">IdentityDomainsSmtpCredentialTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsSmtpCredentialTags;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTags">IdentityDomainsSmtpCredentialTags</a>

---


### IdentityDomainsSmtpCredentialTimeoutsOutputReference <a name="IdentityDomainsSmtpCredentialTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.Initializer"></a>

```typescript
import { identityDomainsSmtpCredential } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeouts">IdentityDomainsSmtpCredentialTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsSmtpCredentialTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialTimeouts">IdentityDomainsSmtpCredentialTimeouts</a>

---


### IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference <a name="IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer"></a>

```typescript
import { identityDomainsSmtpCredential } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resetAllowSelfChange">resetAllowSelfChange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowSelfChange` <a name="resetAllowSelfChange" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resetAllowSelfChange"></a>

```typescript
public resetAllowSelfChange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.allowSelfChangeInput">allowSelfChangeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.allowSelfChange">allowSelfChange</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowSelfChangeInput`<sup>Optional</sup> <a name="allowSelfChangeInput" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.allowSelfChangeInput"></a>

```typescript
public readonly allowSelfChangeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowSelfChange`<sup>Required</sup> <a name="allowSelfChange" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.allowSelfChange"></a>

```typescript
public readonly allowSelfChange: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUser;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">IdentityDomainsSmtpCredentialUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a>

---


### IdentityDomainsSmtpCredentialUserOutputReference <a name="IdentityDomainsSmtpCredentialUserOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.Initializer"></a>

```typescript
import { identityDomainsSmtpCredential } from 'rhizo-co-terraform-provider-oci'

new identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.resetOcid">resetOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOcid` <a name="resetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.resetOcid"></a>

```typescript
public resetOcid(): void
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.property.ocidInput">ocidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUser">IdentityDomainsSmtpCredentialUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `ocidInput`<sup>Optional</sup> <a name="ocidInput" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.property.ocidInput"></a>

```typescript
public readonly ocidInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsSmtpCredentialUser;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSmtpCredential.IdentityDomainsSmtpCredentialUser">IdentityDomainsSmtpCredentialUser</a>

---



