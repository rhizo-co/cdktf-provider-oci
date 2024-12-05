# `identityDomainsIdentityPropagationTrust` Submodule <a name="`identityDomainsIdentityPropagationTrust` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsIdentityPropagationTrust <a name="IdentityDomainsIdentityPropagationTrust" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust oci_identity_domains_identity_propagation_trust}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.Initializer"></a>

```typescript
import { identityDomainsIdentityPropagationTrust } from 'rhizo-co-terraform-provider-oci'

new identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust(scope: Construct, id: string, config: IdentityDomainsIdentityPropagationTrustConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig">IdentityDomainsIdentityPropagationTrustConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig">IdentityDomainsIdentityPropagationTrustConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putImpersonationServiceUsers">putImpersonationServiceUsers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putKeytab">putKeytab</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putTags">putTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetAllowImpersonation">resetAllowImpersonation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetClientClaimName">resetClientClaimName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetClientClaimValues">resetClientClaimValues</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetClockSkewSeconds">resetClockSkewSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetImpersonationServiceUsers">resetImpersonationServiceUsers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetKeytab">resetKeytab</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetOauthClients">resetOauthClients</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetOcid">resetOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetPublicCertificate">resetPublicCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetPublicKeyEndpoint">resetPublicKeyEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetSubjectClaimName">resetSubjectClaimName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetSubjectMappingAttribute">resetSubjectMappingAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetSubjectType">resetSubjectType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putImpersonationServiceUsers` <a name="putImpersonationServiceUsers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putImpersonationServiceUsers"></a>

```typescript
public putImpersonationServiceUsers(value: IResolvable | IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putImpersonationServiceUsers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers">IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers</a>[]

---

##### `putKeytab` <a name="putKeytab" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putKeytab"></a>

```typescript
public putKeytab(value: IdentityDomainsIdentityPropagationTrustKeytab): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putKeytab.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab">IdentityDomainsIdentityPropagationTrustKeytab</a>

---

##### `putTags` <a name="putTags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putTags"></a>

```typescript
public putTags(value: IResolvable | IdentityDomainsIdentityPropagationTrustTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTags">IdentityDomainsIdentityPropagationTrustTags</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putTimeouts"></a>

```typescript
public putTimeouts(value: IdentityDomainsIdentityPropagationTrustTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts">IdentityDomainsIdentityPropagationTrustTimeouts</a>

---

##### `resetAccountId` <a name="resetAccountId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetActive` <a name="resetActive" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetActive"></a>

```typescript
public resetActive(): void
```

##### `resetAllowImpersonation` <a name="resetAllowImpersonation" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetAllowImpersonation"></a>

```typescript
public resetAllowImpersonation(): void
```

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetAttributeSets"></a>

```typescript
public resetAttributeSets(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetClientClaimName` <a name="resetClientClaimName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetClientClaimName"></a>

```typescript
public resetClientClaimName(): void
```

##### `resetClientClaimValues` <a name="resetClientClaimValues" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetClientClaimValues"></a>

```typescript
public resetClientClaimValues(): void
```

##### `resetClockSkewSeconds` <a name="resetClockSkewSeconds" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetClockSkewSeconds"></a>

```typescript
public resetClockSkewSeconds(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetImpersonationServiceUsers` <a name="resetImpersonationServiceUsers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetImpersonationServiceUsers"></a>

```typescript
public resetImpersonationServiceUsers(): void
```

##### `resetKeytab` <a name="resetKeytab" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetKeytab"></a>

```typescript
public resetKeytab(): void
```

##### `resetOauthClients` <a name="resetOauthClients" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetOauthClients"></a>

```typescript
public resetOauthClients(): void
```

##### `resetOcid` <a name="resetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetOcid"></a>

```typescript
public resetOcid(): void
```

##### `resetPublicCertificate` <a name="resetPublicCertificate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetPublicCertificate"></a>

```typescript
public resetPublicCertificate(): void
```

##### `resetPublicKeyEndpoint` <a name="resetPublicKeyEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetPublicKeyEndpoint"></a>

```typescript
public resetPublicKeyEndpoint(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

##### `resetSubjectClaimName` <a name="resetSubjectClaimName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetSubjectClaimName"></a>

```typescript
public resetSubjectClaimName(): void
```

##### `resetSubjectMappingAttribute` <a name="resetSubjectMappingAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetSubjectMappingAttribute"></a>

```typescript
public resetSubjectMappingAttribute(): void
```

##### `resetSubjectType` <a name="resetSubjectType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetSubjectType"></a>

```typescript
public resetSubjectType(): void
```

##### `resetTags` <a name="resetTags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityDomainsIdentityPropagationTrust resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.isConstruct"></a>

```typescript
import { identityDomainsIdentityPropagationTrust } from 'rhizo-co-terraform-provider-oci'

identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.isTerraformElement"></a>

```typescript
import { identityDomainsIdentityPropagationTrust } from 'rhizo-co-terraform-provider-oci'

identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.isTerraformResource"></a>

```typescript
import { identityDomainsIdentityPropagationTrust } from 'rhizo-co-terraform-provider-oci'

identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.generateConfigForImport"></a>

```typescript
import { identityDomainsIdentityPropagationTrust } from 'rhizo-co-terraform-provider-oci'

identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IdentityDomainsIdentityPropagationTrust resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityDomainsIdentityPropagationTrust to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityDomainsIdentityPropagationTrust that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsIdentityPropagationTrust to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList">IdentityDomainsIdentityPropagationTrustIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList">IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.impersonationServiceUsers">impersonationServiceUsers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList">IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.keytab">keytab</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference">IdentityDomainsIdentityPropagationTrustKeytabOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList">IdentityDomainsIdentityPropagationTrustMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList">IdentityDomainsIdentityPropagationTrustTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference">IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.activeInput">activeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.allowImpersonationInput">allowImpersonationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.attributeSetsInput">attributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.attributesInput">attributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clientClaimNameInput">clientClaimNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clientClaimValuesInput">clientClaimValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clockSkewSecondsInput">clockSkewSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.impersonationServiceUsersInput">impersonationServiceUsersInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers">IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.keytabInput">keytabInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab">IdentityDomainsIdentityPropagationTrustKeytab</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.oauthClientsInput">oauthClientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.ocidInput">ocidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.publicCertificateInput">publicCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.publicKeyEndpointInput">publicKeyEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.schemasInput">schemasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectClaimNameInput">subjectClaimNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectMappingAttributeInput">subjectMappingAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectTypeInput">subjectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.tagsInput">tagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTags">IdentityDomainsIdentityPropagationTrustTags</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts">IdentityDomainsIdentityPropagationTrustTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.active">active</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.allowImpersonation">allowImpersonation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clientClaimName">clientClaimName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clientClaimValues">clientClaimValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clockSkewSeconds">clockSkewSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.oauthClients">oauthClients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.publicCertificate">publicCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.publicKeyEndpoint">publicKeyEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectClaimName">subjectClaimName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectMappingAttribute">subjectMappingAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectType">subjectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: IdentityDomainsIdentityPropagationTrustIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList">IdentityDomainsIdentityPropagationTrustIdcsCreatedByList</a>

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList">IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `impersonationServiceUsers`<sup>Required</sup> <a name="impersonationServiceUsers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.impersonationServiceUsers"></a>

```typescript
public readonly impersonationServiceUsers: IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList">IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList</a>

---

##### `keytab`<sup>Required</sup> <a name="keytab" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.keytab"></a>

```typescript
public readonly keytab: IdentityDomainsIdentityPropagationTrustKeytabOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference">IdentityDomainsIdentityPropagationTrustKeytabOutputReference</a>

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.meta"></a>

```typescript
public readonly meta: IdentityDomainsIdentityPropagationTrustMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList">IdentityDomainsIdentityPropagationTrustMetaList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.tags"></a>

```typescript
public readonly tags: IdentityDomainsIdentityPropagationTrustTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList">IdentityDomainsIdentityPropagationTrustTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.timeouts"></a>

```typescript
public readonly timeouts: IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference">IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.activeInput"></a>

```typescript
public readonly activeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowImpersonationInput`<sup>Optional</sup> <a name="allowImpersonationInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.allowImpersonationInput"></a>

```typescript
public readonly allowImpersonationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.attributeSetsInput"></a>

```typescript
public readonly attributeSetsInput: string[];
```

- *Type:* string[]

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.attributesInput"></a>

```typescript
public readonly attributesInput: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `clientClaimNameInput`<sup>Optional</sup> <a name="clientClaimNameInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clientClaimNameInput"></a>

```typescript
public readonly clientClaimNameInput: string;
```

- *Type:* string

---

##### `clientClaimValuesInput`<sup>Optional</sup> <a name="clientClaimValuesInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clientClaimValuesInput"></a>

```typescript
public readonly clientClaimValuesInput: string[];
```

- *Type:* string[]

---

##### `clockSkewSecondsInput`<sup>Optional</sup> <a name="clockSkewSecondsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clockSkewSecondsInput"></a>

```typescript
public readonly clockSkewSecondsInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `impersonationServiceUsersInput`<sup>Optional</sup> <a name="impersonationServiceUsersInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.impersonationServiceUsersInput"></a>

```typescript
public readonly impersonationServiceUsersInput: IResolvable | IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers">IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers</a>[]

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `keytabInput`<sup>Optional</sup> <a name="keytabInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.keytabInput"></a>

```typescript
public readonly keytabInput: IdentityDomainsIdentityPropagationTrustKeytab;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab">IdentityDomainsIdentityPropagationTrustKeytab</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `oauthClientsInput`<sup>Optional</sup> <a name="oauthClientsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.oauthClientsInput"></a>

```typescript
public readonly oauthClientsInput: string[];
```

- *Type:* string[]

---

##### `ocidInput`<sup>Optional</sup> <a name="ocidInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.ocidInput"></a>

```typescript
public readonly ocidInput: string;
```

- *Type:* string

---

##### `publicCertificateInput`<sup>Optional</sup> <a name="publicCertificateInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.publicCertificateInput"></a>

```typescript
public readonly publicCertificateInput: string;
```

- *Type:* string

---

##### `publicKeyEndpointInput`<sup>Optional</sup> <a name="publicKeyEndpointInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.publicKeyEndpointInput"></a>

```typescript
public readonly publicKeyEndpointInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `schemasInput`<sup>Optional</sup> <a name="schemasInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.schemasInput"></a>

```typescript
public readonly schemasInput: string[];
```

- *Type:* string[]

---

##### `subjectClaimNameInput`<sup>Optional</sup> <a name="subjectClaimNameInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectClaimNameInput"></a>

```typescript
public readonly subjectClaimNameInput: string;
```

- *Type:* string

---

##### `subjectMappingAttributeInput`<sup>Optional</sup> <a name="subjectMappingAttributeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectMappingAttributeInput"></a>

```typescript
public readonly subjectMappingAttributeInput: string;
```

- *Type:* string

---

##### `subjectTypeInput`<sup>Optional</sup> <a name="subjectTypeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectTypeInput"></a>

```typescript
public readonly subjectTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IdentityDomainsIdentityPropagationTrustTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTags">IdentityDomainsIdentityPropagationTrustTags</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IdentityDomainsIdentityPropagationTrustTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts">IdentityDomainsIdentityPropagationTrustTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `active`<sup>Required</sup> <a name="active" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowImpersonation`<sup>Required</sup> <a name="allowImpersonation" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.allowImpersonation"></a>

```typescript
public readonly allowImpersonation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `clientClaimName`<sup>Required</sup> <a name="clientClaimName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clientClaimName"></a>

```typescript
public readonly clientClaimName: string;
```

- *Type:* string

---

##### `clientClaimValues`<sup>Required</sup> <a name="clientClaimValues" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clientClaimValues"></a>

```typescript
public readonly clientClaimValues: string[];
```

- *Type:* string[]

---

##### `clockSkewSeconds`<sup>Required</sup> <a name="clockSkewSeconds" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clockSkewSeconds"></a>

```typescript
public readonly clockSkewSeconds: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oauthClients`<sup>Required</sup> <a name="oauthClients" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.oauthClients"></a>

```typescript
public readonly oauthClients: string[];
```

- *Type:* string[]

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `publicCertificate`<sup>Required</sup> <a name="publicCertificate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.publicCertificate"></a>

```typescript
public readonly publicCertificate: string;
```

- *Type:* string

---

##### `publicKeyEndpoint`<sup>Required</sup> <a name="publicKeyEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.publicKeyEndpoint"></a>

```typescript
public readonly publicKeyEndpoint: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `subjectClaimName`<sup>Required</sup> <a name="subjectClaimName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectClaimName"></a>

```typescript
public readonly subjectClaimName: string;
```

- *Type:* string

---

##### `subjectMappingAttribute`<sup>Required</sup> <a name="subjectMappingAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectMappingAttribute"></a>

```typescript
public readonly subjectMappingAttribute: string;
```

- *Type:* string

---

##### `subjectType`<sup>Required</sup> <a name="subjectType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectType"></a>

```typescript
public readonly subjectType: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsIdentityPropagationTrustConfig <a name="IdentityDomainsIdentityPropagationTrustConfig" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.Initializer"></a>

```typescript
import { identityDomainsIdentityPropagationTrust } from 'rhizo-co-terraform-provider-oci'

const identityDomainsIdentityPropagationTrustConfig: identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#idcs_endpoint IdentityDomainsIdentityPropagationTrust#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.issuer">issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#issuer IdentityDomainsIdentityPropagationTrust#issuer}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#name IdentityDomainsIdentityPropagationTrust#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.schemas">schemas</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#schemas IdentityDomainsIdentityPropagationTrust#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#type IdentityDomainsIdentityPropagationTrust#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#account_id IdentityDomainsIdentityPropagationTrust#account_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.active">active</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#active IdentityDomainsIdentityPropagationTrust#active}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.allowImpersonation">allowImpersonation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#allow_impersonation IdentityDomainsIdentityPropagationTrust#allow_impersonation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.attributes">attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#attributes IdentityDomainsIdentityPropagationTrust#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#attribute_sets IdentityDomainsIdentityPropagationTrust#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#authorization IdentityDomainsIdentityPropagationTrust#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.clientClaimName">clientClaimName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#client_claim_name IdentityDomainsIdentityPropagationTrust#client_claim_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.clientClaimValues">clientClaimValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#client_claim_values IdentityDomainsIdentityPropagationTrust#client_claim_values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.clockSkewSeconds">clockSkewSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#clock_skew_seconds IdentityDomainsIdentityPropagationTrust#clock_skew_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#description IdentityDomainsIdentityPropagationTrust#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.impersonationServiceUsers">impersonationServiceUsers</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers">IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers</a>[]</code> | impersonation_service_users block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.keytab">keytab</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab">IdentityDomainsIdentityPropagationTrustKeytab</a></code> | keytab block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.oauthClients">oauthClients</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#oauth_clients IdentityDomainsIdentityPropagationTrust#oauth_clients}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.ocid">ocid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#ocid IdentityDomainsIdentityPropagationTrust#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.publicCertificate">publicCertificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#public_certificate IdentityDomainsIdentityPropagationTrust#public_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.publicKeyEndpoint">publicKeyEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#public_key_endpoint IdentityDomainsIdentityPropagationTrust#public_key_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#resource_type_schema_version IdentityDomainsIdentityPropagationTrust#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.subjectClaimName">subjectClaimName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#subject_claim_name IdentityDomainsIdentityPropagationTrust#subject_claim_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.subjectMappingAttribute">subjectMappingAttribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#subject_mapping_attribute IdentityDomainsIdentityPropagationTrust#subject_mapping_attribute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.subjectType">subjectType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#subject_type IdentityDomainsIdentityPropagationTrust#subject_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.tags">tags</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTags">IdentityDomainsIdentityPropagationTrustTags</a>[]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts">IdentityDomainsIdentityPropagationTrustTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#idcs_endpoint IdentityDomainsIdentityPropagationTrust#idcs_endpoint}.

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#issuer IdentityDomainsIdentityPropagationTrust#issuer}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#name IdentityDomainsIdentityPropagationTrust#name}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#schemas IdentityDomainsIdentityPropagationTrust#schemas}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#type IdentityDomainsIdentityPropagationTrust#type}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#account_id IdentityDomainsIdentityPropagationTrust#account_id}.

---

##### `active`<sup>Optional</sup> <a name="active" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#active IdentityDomainsIdentityPropagationTrust#active}.

---

##### `allowImpersonation`<sup>Optional</sup> <a name="allowImpersonation" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.allowImpersonation"></a>

```typescript
public readonly allowImpersonation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#allow_impersonation IdentityDomainsIdentityPropagationTrust#allow_impersonation}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#attributes IdentityDomainsIdentityPropagationTrust#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#attribute_sets IdentityDomainsIdentityPropagationTrust#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#authorization IdentityDomainsIdentityPropagationTrust#authorization}.

---

##### `clientClaimName`<sup>Optional</sup> <a name="clientClaimName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.clientClaimName"></a>

```typescript
public readonly clientClaimName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#client_claim_name IdentityDomainsIdentityPropagationTrust#client_claim_name}.

---

##### `clientClaimValues`<sup>Optional</sup> <a name="clientClaimValues" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.clientClaimValues"></a>

```typescript
public readonly clientClaimValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#client_claim_values IdentityDomainsIdentityPropagationTrust#client_claim_values}.

---

##### `clockSkewSeconds`<sup>Optional</sup> <a name="clockSkewSeconds" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.clockSkewSeconds"></a>

```typescript
public readonly clockSkewSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#clock_skew_seconds IdentityDomainsIdentityPropagationTrust#clock_skew_seconds}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#description IdentityDomainsIdentityPropagationTrust#description}.

---

##### `impersonationServiceUsers`<sup>Optional</sup> <a name="impersonationServiceUsers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.impersonationServiceUsers"></a>

```typescript
public readonly impersonationServiceUsers: IResolvable | IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers">IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers</a>[]

impersonation_service_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#impersonation_service_users IdentityDomainsIdentityPropagationTrust#impersonation_service_users}

---

##### `keytab`<sup>Optional</sup> <a name="keytab" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.keytab"></a>

```typescript
public readonly keytab: IdentityDomainsIdentityPropagationTrustKeytab;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab">IdentityDomainsIdentityPropagationTrustKeytab</a>

keytab block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#keytab IdentityDomainsIdentityPropagationTrust#keytab}

---

##### `oauthClients`<sup>Optional</sup> <a name="oauthClients" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.oauthClients"></a>

```typescript
public readonly oauthClients: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#oauth_clients IdentityDomainsIdentityPropagationTrust#oauth_clients}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#ocid IdentityDomainsIdentityPropagationTrust#ocid}.

---

##### `publicCertificate`<sup>Optional</sup> <a name="publicCertificate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.publicCertificate"></a>

```typescript
public readonly publicCertificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#public_certificate IdentityDomainsIdentityPropagationTrust#public_certificate}.

---

##### `publicKeyEndpoint`<sup>Optional</sup> <a name="publicKeyEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.publicKeyEndpoint"></a>

```typescript
public readonly publicKeyEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#public_key_endpoint IdentityDomainsIdentityPropagationTrust#public_key_endpoint}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#resource_type_schema_version IdentityDomainsIdentityPropagationTrust#resource_type_schema_version}.

---

##### `subjectClaimName`<sup>Optional</sup> <a name="subjectClaimName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.subjectClaimName"></a>

```typescript
public readonly subjectClaimName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#subject_claim_name IdentityDomainsIdentityPropagationTrust#subject_claim_name}.

---

##### `subjectMappingAttribute`<sup>Optional</sup> <a name="subjectMappingAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.subjectMappingAttribute"></a>

```typescript
public readonly subjectMappingAttribute: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#subject_mapping_attribute IdentityDomainsIdentityPropagationTrust#subject_mapping_attribute}.

---

##### `subjectType`<sup>Optional</sup> <a name="subjectType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.subjectType"></a>

```typescript
public readonly subjectType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#subject_type IdentityDomainsIdentityPropagationTrust#subject_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IdentityDomainsIdentityPropagationTrustTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTags">IdentityDomainsIdentityPropagationTrustTags</a>[]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#tags IdentityDomainsIdentityPropagationTrust#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IdentityDomainsIdentityPropagationTrustTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts">IdentityDomainsIdentityPropagationTrustTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#timeouts IdentityDomainsIdentityPropagationTrust#timeouts}

---

### IdentityDomainsIdentityPropagationTrustIdcsCreatedBy <a name="IdentityDomainsIdentityPropagationTrustIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedBy.Initializer"></a>

```typescript
import { identityDomainsIdentityPropagationTrust } from 'rhizo-co-terraform-provider-oci'

const identityDomainsIdentityPropagationTrustIdcsCreatedBy: identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedBy = { ... }
```


### IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy <a name="IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy.Initializer"></a>

```typescript
import { identityDomainsIdentityPropagationTrust } from 'rhizo-co-terraform-provider-oci'

const identityDomainsIdentityPropagationTrustIdcsLastModifiedBy: identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy = { ... }
```


### IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers <a name="IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers.Initializer"></a>

```typescript
import { identityDomainsIdentityPropagationTrust } from 'rhizo-co-terraform-provider-oci'

const identityDomainsIdentityPropagationTrustImpersonationServiceUsers: identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers.property.rule">rule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#rule IdentityDomainsIdentityPropagationTrust#rule}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#value IdentityDomainsIdentityPropagationTrust#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers.property.ocid">ocid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#ocid IdentityDomainsIdentityPropagationTrust#ocid}. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers.property.rule"></a>

```typescript
public readonly rule: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#rule IdentityDomainsIdentityPropagationTrust#rule}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#value IdentityDomainsIdentityPropagationTrust#value}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#ocid IdentityDomainsIdentityPropagationTrust#ocid}.

---

### IdentityDomainsIdentityPropagationTrustKeytab <a name="IdentityDomainsIdentityPropagationTrustKeytab" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab.Initializer"></a>

```typescript
import { identityDomainsIdentityPropagationTrust } from 'rhizo-co-terraform-provider-oci'

const identityDomainsIdentityPropagationTrustKeytab: identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab.property.secretOcid">secretOcid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#secret_ocid IdentityDomainsIdentityPropagationTrust#secret_ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab.property.secretVersion">secretVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#secret_version IdentityDomainsIdentityPropagationTrust#secret_version}. |

---

##### `secretOcid`<sup>Required</sup> <a name="secretOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab.property.secretOcid"></a>

```typescript
public readonly secretOcid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#secret_ocid IdentityDomainsIdentityPropagationTrust#secret_ocid}.

---

##### `secretVersion`<sup>Optional</sup> <a name="secretVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab.property.secretVersion"></a>

```typescript
public readonly secretVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#secret_version IdentityDomainsIdentityPropagationTrust#secret_version}.

---

### IdentityDomainsIdentityPropagationTrustMeta <a name="IdentityDomainsIdentityPropagationTrustMeta" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMeta.Initializer"></a>

```typescript
import { identityDomainsIdentityPropagationTrust } from 'rhizo-co-terraform-provider-oci'

const identityDomainsIdentityPropagationTrustMeta: identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMeta = { ... }
```


### IdentityDomainsIdentityPropagationTrustTags <a name="IdentityDomainsIdentityPropagationTrustTags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTags.Initializer"></a>

```typescript
import { identityDomainsIdentityPropagationTrust } from 'rhizo-co-terraform-provider-oci'

const identityDomainsIdentityPropagationTrustTags: identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#key IdentityDomainsIdentityPropagationTrust#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#value IdentityDomainsIdentityPropagationTrust#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#key IdentityDomainsIdentityPropagationTrust#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#value IdentityDomainsIdentityPropagationTrust#value}.

---

### IdentityDomainsIdentityPropagationTrustTimeouts <a name="IdentityDomainsIdentityPropagationTrustTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts.Initializer"></a>

```typescript
import { identityDomainsIdentityPropagationTrust } from 'rhizo-co-terraform-provider-oci'

const identityDomainsIdentityPropagationTrustTimeouts: identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#create IdentityDomainsIdentityPropagationTrust#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#delete IdentityDomainsIdentityPropagationTrust#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#update IdentityDomainsIdentityPropagationTrust#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#create IdentityDomainsIdentityPropagationTrust#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#delete IdentityDomainsIdentityPropagationTrust#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#update IdentityDomainsIdentityPropagationTrust#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsIdentityPropagationTrustIdcsCreatedByList <a name="IdentityDomainsIdentityPropagationTrustIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.Initializer"></a>

```typescript
import { identityDomainsIdentityPropagationTrust } from 'rhizo-co-terraform-provider-oci'

new identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.get"></a>

```typescript
public get(index: number): IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference <a name="IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { identityDomainsIdentityPropagationTrust } from 'rhizo-co-terraform-provider-oci'

new identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedBy">IdentityDomainsIdentityPropagationTrustIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsIdentityPropagationTrustIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedBy">IdentityDomainsIdentityPropagationTrustIdcsCreatedBy</a>

---


### IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList <a name="IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.Initializer"></a>

```typescript
import { identityDomainsIdentityPropagationTrust } from 'rhizo-co-terraform-provider-oci'

new identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference <a name="IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { identityDomainsIdentityPropagationTrust } from 'rhizo-co-terraform-provider-oci'

new identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy">IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy">IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy</a>

---


### IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList <a name="IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.Initializer"></a>

```typescript
import { identityDomainsIdentityPropagationTrust } from 'rhizo-co-terraform-provider-oci'

new identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.get"></a>

```typescript
public get(index: number): IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers">IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers">IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers</a>[]

---


### IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference <a name="IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer"></a>

```typescript
import { identityDomainsIdentityPropagationTrust } from 'rhizo-co-terraform-provider-oci'

new identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.resetOcid">resetOcid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOcid` <a name="resetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.resetOcid"></a>

```typescript
public resetOcid(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.ocidInput">ocidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.ruleInput">ruleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.rule">rule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers">IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `ocidInput`<sup>Optional</sup> <a name="ocidInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.ocidInput"></a>

```typescript
public readonly ocidInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.ruleInput"></a>

```typescript
public readonly ruleInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.rule"></a>

```typescript
public readonly rule: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers">IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers</a>

---


### IdentityDomainsIdentityPropagationTrustKeytabOutputReference <a name="IdentityDomainsIdentityPropagationTrustKeytabOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.Initializer"></a>

```typescript
import { identityDomainsIdentityPropagationTrust } from 'rhizo-co-terraform-provider-oci'

new identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.resetSecretVersion">resetSecretVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretVersion` <a name="resetSecretVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.resetSecretVersion"></a>

```typescript
public resetSecretVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.secretOcidInput">secretOcidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.secretVersionInput">secretVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.secretOcid">secretOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.secretVersion">secretVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab">IdentityDomainsIdentityPropagationTrustKeytab</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretOcidInput`<sup>Optional</sup> <a name="secretOcidInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.secretOcidInput"></a>

```typescript
public readonly secretOcidInput: string;
```

- *Type:* string

---

##### `secretVersionInput`<sup>Optional</sup> <a name="secretVersionInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.secretVersionInput"></a>

```typescript
public readonly secretVersionInput: number;
```

- *Type:* number

---

##### `secretOcid`<sup>Required</sup> <a name="secretOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.secretOcid"></a>

```typescript
public readonly secretOcid: string;
```

- *Type:* string

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.secretVersion"></a>

```typescript
public readonly secretVersion: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsIdentityPropagationTrustKeytab;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab">IdentityDomainsIdentityPropagationTrustKeytab</a>

---


### IdentityDomainsIdentityPropagationTrustMetaList <a name="IdentityDomainsIdentityPropagationTrustMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.Initializer"></a>

```typescript
import { identityDomainsIdentityPropagationTrust } from 'rhizo-co-terraform-provider-oci'

new identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.get"></a>

```typescript
public get(index: number): IdentityDomainsIdentityPropagationTrustMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityDomainsIdentityPropagationTrustMetaOutputReference <a name="IdentityDomainsIdentityPropagationTrustMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer"></a>

```typescript
import { identityDomainsIdentityPropagationTrust } from 'rhizo-co-terraform-provider-oci'

new identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMeta">IdentityDomainsIdentityPropagationTrustMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsIdentityPropagationTrustMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMeta">IdentityDomainsIdentityPropagationTrustMeta</a>

---


### IdentityDomainsIdentityPropagationTrustTagsList <a name="IdentityDomainsIdentityPropagationTrustTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.Initializer"></a>

```typescript
import { identityDomainsIdentityPropagationTrust } from 'rhizo-co-terraform-provider-oci'

new identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.get"></a>

```typescript
public get(index: number): IdentityDomainsIdentityPropagationTrustTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTags">IdentityDomainsIdentityPropagationTrustTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsIdentityPropagationTrustTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTags">IdentityDomainsIdentityPropagationTrustTags</a>[]

---


### IdentityDomainsIdentityPropagationTrustTagsOutputReference <a name="IdentityDomainsIdentityPropagationTrustTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer"></a>

```typescript
import { identityDomainsIdentityPropagationTrust } from 'rhizo-co-terraform-provider-oci'

new identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTags">IdentityDomainsIdentityPropagationTrustTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsIdentityPropagationTrustTags;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTags">IdentityDomainsIdentityPropagationTrustTags</a>

---


### IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference <a name="IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.Initializer"></a>

```typescript
import { identityDomainsIdentityPropagationTrust } from 'rhizo-co-terraform-provider-oci'

new identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts">IdentityDomainsIdentityPropagationTrustTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsIdentityPropagationTrustTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts">IdentityDomainsIdentityPropagationTrustTimeouts</a>

---



