# `certificatesManagementCertificate` Submodule <a name="`certificatesManagementCertificate` Submodule" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificatesManagementCertificate <a name="CertificatesManagementCertificate" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate oci_certificates_management_certificate}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

new certificatesManagementCertificate.CertificatesManagementCertificate(scope: Construct, id: string, config: CertificatesManagementCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig">CertificatesManagementCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig">CertificatesManagementCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putCertificateConfig">putCertificateConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putCertificateRules">putCertificateRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetCertificateRules">resetCertificateRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCertificateConfig` <a name="putCertificateConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putCertificateConfig"></a>

```typescript
public putCertificateConfig(value: CertificatesManagementCertificateCertificateConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putCertificateConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig">CertificatesManagementCertificateCertificateConfig</a>

---

##### `putCertificateRules` <a name="putCertificateRules" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putCertificateRules"></a>

```typescript
public putCertificateRules(value: IResolvable | CertificatesManagementCertificateCertificateRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putCertificateRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules">CertificatesManagementCertificateCertificateRules</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putTimeouts"></a>

```typescript
public putTimeouts(value: CertificatesManagementCertificateTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts">CertificatesManagementCertificateTimeouts</a>

---

##### `resetCertificateRules` <a name="resetCertificateRules" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetCertificateRules"></a>

```typescript
public resetCertificateRules(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CertificatesManagementCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isConstruct"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

certificatesManagementCertificate.CertificatesManagementCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isTerraformElement"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

certificatesManagementCertificate.CertificatesManagementCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isTerraformResource"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

certificatesManagementCertificate.CertificatesManagementCertificate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.generateConfigForImport"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

certificatesManagementCertificate.CertificatesManagementCertificate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CertificatesManagementCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CertificatesManagementCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CertificatesManagementCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CertificatesManagementCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateConfig">certificateConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference">CertificatesManagementCertificateCertificateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateProfileType">certificateProfileType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateRevocationListDetails">certificateRevocationListDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList">CertificatesManagementCertificateCertificateRevocationListDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateRules">certificateRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList">CertificatesManagementCertificateCertificateRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.configType">configType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.currentVersion">currentVersion</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList">CertificatesManagementCertificateCurrentVersionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.issuerCertificateAuthorityId">issuerCertificateAuthorityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.keyAlgorithm">keyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.subject">subject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList">CertificatesManagementCertificateSubjectList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.timeOfDeletion">timeOfDeletion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference">CertificatesManagementCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateConfigInput">certificateConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig">CertificatesManagementCertificateCertificateConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateRulesInput">certificateRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules">CertificatesManagementCertificateCertificateRules</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts">CertificatesManagementCertificateTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificateConfig`<sup>Required</sup> <a name="certificateConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateConfig"></a>

```typescript
public readonly certificateConfig: CertificatesManagementCertificateCertificateConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference">CertificatesManagementCertificateCertificateConfigOutputReference</a>

---

##### `certificateProfileType`<sup>Required</sup> <a name="certificateProfileType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateProfileType"></a>

```typescript
public readonly certificateProfileType: string;
```

- *Type:* string

---

##### `certificateRevocationListDetails`<sup>Required</sup> <a name="certificateRevocationListDetails" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateRevocationListDetails"></a>

```typescript
public readonly certificateRevocationListDetails: CertificatesManagementCertificateCertificateRevocationListDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList">CertificatesManagementCertificateCertificateRevocationListDetailsList</a>

---

##### `certificateRules`<sup>Required</sup> <a name="certificateRules" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateRules"></a>

```typescript
public readonly certificateRules: CertificatesManagementCertificateCertificateRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList">CertificatesManagementCertificateCertificateRulesList</a>

---

##### `configType`<sup>Required</sup> <a name="configType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.configType"></a>

```typescript
public readonly configType: string;
```

- *Type:* string

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.currentVersion"></a>

```typescript
public readonly currentVersion: CertificatesManagementCertificateCurrentVersionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList">CertificatesManagementCertificateCurrentVersionList</a>

---

##### `issuerCertificateAuthorityId`<sup>Required</sup> <a name="issuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.issuerCertificateAuthorityId"></a>

```typescript
public readonly issuerCertificateAuthorityId: string;
```

- *Type:* string

---

##### `keyAlgorithm`<sup>Required</sup> <a name="keyAlgorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.keyAlgorithm"></a>

```typescript
public readonly keyAlgorithm: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `signatureAlgorithm`<sup>Required</sup> <a name="signatureAlgorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.signatureAlgorithm"></a>

```typescript
public readonly signatureAlgorithm: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.subject"></a>

```typescript
public readonly subject: CertificatesManagementCertificateSubjectList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList">CertificatesManagementCertificateSubjectList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeOfDeletion`<sup>Required</sup> <a name="timeOfDeletion" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.timeOfDeletion"></a>

```typescript
public readonly timeOfDeletion: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.timeouts"></a>

```typescript
public readonly timeouts: CertificatesManagementCertificateTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference">CertificatesManagementCertificateTimeoutsOutputReference</a>

---

##### `certificateConfigInput`<sup>Optional</sup> <a name="certificateConfigInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateConfigInput"></a>

```typescript
public readonly certificateConfigInput: CertificatesManagementCertificateCertificateConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig">CertificatesManagementCertificateCertificateConfig</a>

---

##### `certificateRulesInput`<sup>Optional</sup> <a name="certificateRulesInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateRulesInput"></a>

```typescript
public readonly certificateRulesInput: IResolvable | CertificatesManagementCertificateCertificateRules[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules">CertificatesManagementCertificateCertificateRules</a>[]

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CertificatesManagementCertificateTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts">CertificatesManagementCertificateTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CertificatesManagementCertificateCertificateConfig <a name="CertificatesManagementCertificateCertificateConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

const certificatesManagementCertificateCertificateConfig: certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.configType">configType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#config_type CertificatesManagementCertificate#config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.certificateProfileType">certificateProfileType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#certificate_profile_type CertificatesManagementCertificate#certificate_profile_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.csrPem">csrPem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#csr_pem CertificatesManagementCertificate#csr_pem}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.issuerCertificateAuthorityId">issuerCertificateAuthorityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#issuer_certificate_authority_id CertificatesManagementCertificate#issuer_certificate_authority_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.keyAlgorithm">keyAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#key_algorithm CertificatesManagementCertificate#key_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#signature_algorithm CertificatesManagementCertificate#signature_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.subject">subject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject">CertificatesManagementCertificateCertificateConfigSubject</a></code> | subject block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames</a>[]</code> | subject_alternative_names block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.validity">validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity">CertificatesManagementCertificateCertificateConfigValidity</a></code> | validity block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.versionName">versionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#version_name CertificatesManagementCertificate#version_name}. |

---

##### `configType`<sup>Required</sup> <a name="configType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.configType"></a>

```typescript
public readonly configType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#config_type CertificatesManagementCertificate#config_type}.

---

##### `certificateProfileType`<sup>Optional</sup> <a name="certificateProfileType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.certificateProfileType"></a>

```typescript
public readonly certificateProfileType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#certificate_profile_type CertificatesManagementCertificate#certificate_profile_type}.

---

##### `csrPem`<sup>Optional</sup> <a name="csrPem" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.csrPem"></a>

```typescript
public readonly csrPem: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#csr_pem CertificatesManagementCertificate#csr_pem}.

---

##### `issuerCertificateAuthorityId`<sup>Optional</sup> <a name="issuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.issuerCertificateAuthorityId"></a>

```typescript
public readonly issuerCertificateAuthorityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#issuer_certificate_authority_id CertificatesManagementCertificate#issuer_certificate_authority_id}.

---

##### `keyAlgorithm`<sup>Optional</sup> <a name="keyAlgorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.keyAlgorithm"></a>

```typescript
public readonly keyAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#key_algorithm CertificatesManagementCertificate#key_algorithm}.

---

##### `signatureAlgorithm`<sup>Optional</sup> <a name="signatureAlgorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.signatureAlgorithm"></a>

```typescript
public readonly signatureAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#signature_algorithm CertificatesManagementCertificate#signature_algorithm}.

---

##### `subject`<sup>Optional</sup> <a name="subject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.subject"></a>

```typescript
public readonly subject: CertificatesManagementCertificateCertificateConfigSubject;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject">CertificatesManagementCertificateCertificateConfigSubject</a>

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#subject CertificatesManagementCertificate#subject}

---

##### `subjectAlternativeNames`<sup>Optional</sup> <a name="subjectAlternativeNames" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.subjectAlternativeNames"></a>

```typescript
public readonly subjectAlternativeNames: IResolvable | CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames</a>[]

subject_alternative_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#subject_alternative_names CertificatesManagementCertificate#subject_alternative_names}

---

##### `validity`<sup>Optional</sup> <a name="validity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.validity"></a>

```typescript
public readonly validity: CertificatesManagementCertificateCertificateConfigValidity;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity">CertificatesManagementCertificateCertificateConfigValidity</a>

validity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#validity CertificatesManagementCertificate#validity}

---

##### `versionName`<sup>Optional</sup> <a name="versionName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#version_name CertificatesManagementCertificate#version_name}.

---

### CertificatesManagementCertificateCertificateConfigSubject <a name="CertificatesManagementCertificateCertificateConfigSubject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

const certificatesManagementCertificateCertificateConfigSubject: certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.commonName">commonName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#common_name CertificatesManagementCertificate#common_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.country">country</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#country CertificatesManagementCertificate#country}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.distinguishedNameQualifier">distinguishedNameQualifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#distinguished_name_qualifier CertificatesManagementCertificate#distinguished_name_qualifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.domainComponent">domainComponent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#domain_component CertificatesManagementCertificate#domain_component}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.generationQualifier">generationQualifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#generation_qualifier CertificatesManagementCertificate#generation_qualifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.givenName">givenName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#given_name CertificatesManagementCertificate#given_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.initials">initials</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#initials CertificatesManagementCertificate#initials}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.localityName">localityName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#locality_name CertificatesManagementCertificate#locality_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.organization">organization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#organization CertificatesManagementCertificate#organization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.organizationalUnit">organizationalUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#organizational_unit CertificatesManagementCertificate#organizational_unit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.pseudonym">pseudonym</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#pseudonym CertificatesManagementCertificate#pseudonym}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.serialNumber">serialNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#serial_number CertificatesManagementCertificate#serial_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.stateOrProvinceName">stateOrProvinceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#state_or_province_name CertificatesManagementCertificate#state_or_province_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.street">street</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#street CertificatesManagementCertificate#street}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.surname">surname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#surname CertificatesManagementCertificate#surname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#title CertificatesManagementCertificate#title}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.userId">userId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#user_id CertificatesManagementCertificate#user_id}. |

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#common_name CertificatesManagementCertificate#common_name}.

---

##### `country`<sup>Optional</sup> <a name="country" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#country CertificatesManagementCertificate#country}.

---

##### `distinguishedNameQualifier`<sup>Optional</sup> <a name="distinguishedNameQualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.distinguishedNameQualifier"></a>

```typescript
public readonly distinguishedNameQualifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#distinguished_name_qualifier CertificatesManagementCertificate#distinguished_name_qualifier}.

---

##### `domainComponent`<sup>Optional</sup> <a name="domainComponent" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.domainComponent"></a>

```typescript
public readonly domainComponent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#domain_component CertificatesManagementCertificate#domain_component}.

---

##### `generationQualifier`<sup>Optional</sup> <a name="generationQualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.generationQualifier"></a>

```typescript
public readonly generationQualifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#generation_qualifier CertificatesManagementCertificate#generation_qualifier}.

---

##### `givenName`<sup>Optional</sup> <a name="givenName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#given_name CertificatesManagementCertificate#given_name}.

---

##### `initials`<sup>Optional</sup> <a name="initials" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.initials"></a>

```typescript
public readonly initials: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#initials CertificatesManagementCertificate#initials}.

---

##### `localityName`<sup>Optional</sup> <a name="localityName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.localityName"></a>

```typescript
public readonly localityName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#locality_name CertificatesManagementCertificate#locality_name}.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#organization CertificatesManagementCertificate#organization}.

---

##### `organizationalUnit`<sup>Optional</sup> <a name="organizationalUnit" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.organizationalUnit"></a>

```typescript
public readonly organizationalUnit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#organizational_unit CertificatesManagementCertificate#organizational_unit}.

---

##### `pseudonym`<sup>Optional</sup> <a name="pseudonym" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.pseudonym"></a>

```typescript
public readonly pseudonym: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#pseudonym CertificatesManagementCertificate#pseudonym}.

---

##### `serialNumber`<sup>Optional</sup> <a name="serialNumber" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#serial_number CertificatesManagementCertificate#serial_number}.

---

##### `stateOrProvinceName`<sup>Optional</sup> <a name="stateOrProvinceName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.stateOrProvinceName"></a>

```typescript
public readonly stateOrProvinceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#state_or_province_name CertificatesManagementCertificate#state_or_province_name}.

---

##### `street`<sup>Optional</sup> <a name="street" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.street"></a>

```typescript
public readonly street: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#street CertificatesManagementCertificate#street}.

---

##### `surname`<sup>Optional</sup> <a name="surname" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.surname"></a>

```typescript
public readonly surname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#surname CertificatesManagementCertificate#surname}.

---

##### `title`<sup>Optional</sup> <a name="title" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#title CertificatesManagementCertificate#title}.

---

##### `userId`<sup>Optional</sup> <a name="userId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#user_id CertificatesManagementCertificate#user_id}.

---

### CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames <a name="CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

const certificatesManagementCertificateCertificateConfigSubjectAlternativeNames: certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#type CertificatesManagementCertificate#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#value CertificatesManagementCertificate#value}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#type CertificatesManagementCertificate#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#value CertificatesManagementCertificate#value}.

---

### CertificatesManagementCertificateCertificateConfigValidity <a name="CertificatesManagementCertificateCertificateConfigValidity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

const certificatesManagementCertificateCertificateConfigValidity: certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity.property.timeOfValidityNotAfter">timeOfValidityNotAfter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#time_of_validity_not_after CertificatesManagementCertificate#time_of_validity_not_after}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity.property.timeOfValidityNotBefore">timeOfValidityNotBefore</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#time_of_validity_not_before CertificatesManagementCertificate#time_of_validity_not_before}. |

---

##### `timeOfValidityNotAfter`<sup>Required</sup> <a name="timeOfValidityNotAfter" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity.property.timeOfValidityNotAfter"></a>

```typescript
public readonly timeOfValidityNotAfter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#time_of_validity_not_after CertificatesManagementCertificate#time_of_validity_not_after}.

---

##### `timeOfValidityNotBefore`<sup>Optional</sup> <a name="timeOfValidityNotBefore" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity.property.timeOfValidityNotBefore"></a>

```typescript
public readonly timeOfValidityNotBefore: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#time_of_validity_not_before CertificatesManagementCertificate#time_of_validity_not_before}.

---

### CertificatesManagementCertificateCertificateRevocationListDetails <a name="CertificatesManagementCertificateCertificateRevocationListDetails" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetails.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

const certificatesManagementCertificateCertificateRevocationListDetails: certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetails = { ... }
```


### CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig <a name="CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

const certificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig: certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig = { ... }
```


### CertificatesManagementCertificateCertificateRules <a name="CertificatesManagementCertificateCertificateRules" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

const certificatesManagementCertificateCertificateRules: certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules.property.advanceRenewalPeriod">advanceRenewalPeriod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#advance_renewal_period CertificatesManagementCertificate#advance_renewal_period}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules.property.renewalInterval">renewalInterval</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#renewal_interval CertificatesManagementCertificate#renewal_interval}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules.property.ruleType">ruleType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#rule_type CertificatesManagementCertificate#rule_type}. |

---

##### `advanceRenewalPeriod`<sup>Required</sup> <a name="advanceRenewalPeriod" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules.property.advanceRenewalPeriod"></a>

```typescript
public readonly advanceRenewalPeriod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#advance_renewal_period CertificatesManagementCertificate#advance_renewal_period}.

---

##### `renewalInterval`<sup>Required</sup> <a name="renewalInterval" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules.property.renewalInterval"></a>

```typescript
public readonly renewalInterval: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#renewal_interval CertificatesManagementCertificate#renewal_interval}.

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules.property.ruleType"></a>

```typescript
public readonly ruleType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#rule_type CertificatesManagementCertificate#rule_type}.

---

### CertificatesManagementCertificateConfig <a name="CertificatesManagementCertificateConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

const certificatesManagementCertificateConfig: certificatesManagementCertificate.CertificatesManagementCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.certificateConfig">certificateConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig">CertificatesManagementCertificateCertificateConfig</a></code> | certificate_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#compartment_id CertificatesManagementCertificate#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#name CertificatesManagementCertificate#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.certificateRules">certificateRules</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules">CertificatesManagementCertificateCertificateRules</a>[]</code> | certificate_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#defined_tags CertificatesManagementCertificate#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#description CertificatesManagementCertificate#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#freeform_tags CertificatesManagementCertificate#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#id CertificatesManagementCertificate#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts">CertificatesManagementCertificateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificateConfig`<sup>Required</sup> <a name="certificateConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.certificateConfig"></a>

```typescript
public readonly certificateConfig: CertificatesManagementCertificateCertificateConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig">CertificatesManagementCertificateCertificateConfig</a>

certificate_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#certificate_config CertificatesManagementCertificate#certificate_config}

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#compartment_id CertificatesManagementCertificate#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#name CertificatesManagementCertificate#name}.

---

##### `certificateRules`<sup>Optional</sup> <a name="certificateRules" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.certificateRules"></a>

```typescript
public readonly certificateRules: IResolvable | CertificatesManagementCertificateCertificateRules[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules">CertificatesManagementCertificateCertificateRules</a>[]

certificate_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#certificate_rules CertificatesManagementCertificate#certificate_rules}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#defined_tags CertificatesManagementCertificate#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#description CertificatesManagementCertificate#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#freeform_tags CertificatesManagementCertificate#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#id CertificatesManagementCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CertificatesManagementCertificateTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts">CertificatesManagementCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#timeouts CertificatesManagementCertificate#timeouts}

---

### CertificatesManagementCertificateCurrentVersion <a name="CertificatesManagementCertificateCurrentVersion" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersion"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersion.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

const certificatesManagementCertificateCurrentVersion: certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersion = { ... }
```


### CertificatesManagementCertificateCurrentVersionRevocationStatus <a name="CertificatesManagementCertificateCurrentVersionRevocationStatus" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatus"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatus.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

const certificatesManagementCertificateCurrentVersionRevocationStatus: certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatus = { ... }
```


### CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames <a name="CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

const certificatesManagementCertificateCurrentVersionSubjectAlternativeNames: certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames = { ... }
```


### CertificatesManagementCertificateCurrentVersionValidity <a name="CertificatesManagementCertificateCurrentVersionValidity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidity.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

const certificatesManagementCertificateCurrentVersionValidity: certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidity = { ... }
```


### CertificatesManagementCertificateSubject <a name="CertificatesManagementCertificateSubject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubject.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

const certificatesManagementCertificateSubject: certificatesManagementCertificate.CertificatesManagementCertificateSubject = { ... }
```


### CertificatesManagementCertificateTimeouts <a name="CertificatesManagementCertificateTimeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

const certificatesManagementCertificateTimeouts: certificatesManagementCertificate.CertificatesManagementCertificateTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#create CertificatesManagementCertificate#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#delete CertificatesManagementCertificate#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#update CertificatesManagementCertificate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#create CertificatesManagementCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#delete CertificatesManagementCertificate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#update CertificatesManagementCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CertificatesManagementCertificateCertificateConfigOutputReference <a name="CertificatesManagementCertificateCertificateConfigOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

new certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubject">putSubject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubjectAlternativeNames">putSubjectAlternativeNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putValidity">putValidity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetCertificateProfileType">resetCertificateProfileType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetCsrPem">resetCsrPem</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetIssuerCertificateAuthorityId">resetIssuerCertificateAuthorityId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetKeyAlgorithm">resetKeyAlgorithm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetSignatureAlgorithm">resetSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetSubject">resetSubject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetSubjectAlternativeNames">resetSubjectAlternativeNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetValidity">resetValidity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetVersionName">resetVersionName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSubject` <a name="putSubject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubject"></a>

```typescript
public putSubject(value: CertificatesManagementCertificateCertificateConfigSubject): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubject.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject">CertificatesManagementCertificateCertificateConfigSubject</a>

---

##### `putSubjectAlternativeNames` <a name="putSubjectAlternativeNames" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubjectAlternativeNames"></a>

```typescript
public putSubjectAlternativeNames(value: IResolvable | CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubjectAlternativeNames.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames</a>[]

---

##### `putValidity` <a name="putValidity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putValidity"></a>

```typescript
public putValidity(value: CertificatesManagementCertificateCertificateConfigValidity): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putValidity.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity">CertificatesManagementCertificateCertificateConfigValidity</a>

---

##### `resetCertificateProfileType` <a name="resetCertificateProfileType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetCertificateProfileType"></a>

```typescript
public resetCertificateProfileType(): void
```

##### `resetCsrPem` <a name="resetCsrPem" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetCsrPem"></a>

```typescript
public resetCsrPem(): void
```

##### `resetIssuerCertificateAuthorityId` <a name="resetIssuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetIssuerCertificateAuthorityId"></a>

```typescript
public resetIssuerCertificateAuthorityId(): void
```

##### `resetKeyAlgorithm` <a name="resetKeyAlgorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetKeyAlgorithm"></a>

```typescript
public resetKeyAlgorithm(): void
```

##### `resetSignatureAlgorithm` <a name="resetSignatureAlgorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetSignatureAlgorithm"></a>

```typescript
public resetSignatureAlgorithm(): void
```

##### `resetSubject` <a name="resetSubject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetSubject"></a>

```typescript
public resetSubject(): void
```

##### `resetSubjectAlternativeNames` <a name="resetSubjectAlternativeNames" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetSubjectAlternativeNames"></a>

```typescript
public resetSubjectAlternativeNames(): void
```

##### `resetValidity` <a name="resetValidity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetValidity"></a>

```typescript
public resetValidity(): void
```

##### `resetVersionName` <a name="resetVersionName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetVersionName"></a>

```typescript
public resetVersionName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.subject">subject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference">CertificatesManagementCertificateCertificateConfigSubjectOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.validity">validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference">CertificatesManagementCertificateCertificateConfigValidityOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.certificateProfileTypeInput">certificateProfileTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.configTypeInput">configTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.csrPemInput">csrPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.issuerCertificateAuthorityIdInput">issuerCertificateAuthorityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.keyAlgorithmInput">keyAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.signatureAlgorithmInput">signatureAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.subjectAlternativeNamesInput">subjectAlternativeNamesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.subjectInput">subjectInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject">CertificatesManagementCertificateCertificateConfigSubject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.validityInput">validityInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity">CertificatesManagementCertificateCertificateConfigValidity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.versionNameInput">versionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.certificateProfileType">certificateProfileType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.configType">configType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.csrPem">csrPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.issuerCertificateAuthorityId">issuerCertificateAuthorityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.keyAlgorithm">keyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.versionName">versionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig">CertificatesManagementCertificateCertificateConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.subject"></a>

```typescript
public readonly subject: CertificatesManagementCertificateCertificateConfigSubjectOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference">CertificatesManagementCertificateCertificateConfigSubjectOutputReference</a>

---

##### `subjectAlternativeNames`<sup>Required</sup> <a name="subjectAlternativeNames" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.subjectAlternativeNames"></a>

```typescript
public readonly subjectAlternativeNames: CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList</a>

---

##### `validity`<sup>Required</sup> <a name="validity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.validity"></a>

```typescript
public readonly validity: CertificatesManagementCertificateCertificateConfigValidityOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference">CertificatesManagementCertificateCertificateConfigValidityOutputReference</a>

---

##### `certificateProfileTypeInput`<sup>Optional</sup> <a name="certificateProfileTypeInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.certificateProfileTypeInput"></a>

```typescript
public readonly certificateProfileTypeInput: string;
```

- *Type:* string

---

##### `configTypeInput`<sup>Optional</sup> <a name="configTypeInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.configTypeInput"></a>

```typescript
public readonly configTypeInput: string;
```

- *Type:* string

---

##### `csrPemInput`<sup>Optional</sup> <a name="csrPemInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.csrPemInput"></a>

```typescript
public readonly csrPemInput: string;
```

- *Type:* string

---

##### `issuerCertificateAuthorityIdInput`<sup>Optional</sup> <a name="issuerCertificateAuthorityIdInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.issuerCertificateAuthorityIdInput"></a>

```typescript
public readonly issuerCertificateAuthorityIdInput: string;
```

- *Type:* string

---

##### `keyAlgorithmInput`<sup>Optional</sup> <a name="keyAlgorithmInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.keyAlgorithmInput"></a>

```typescript
public readonly keyAlgorithmInput: string;
```

- *Type:* string

---

##### `signatureAlgorithmInput`<sup>Optional</sup> <a name="signatureAlgorithmInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.signatureAlgorithmInput"></a>

```typescript
public readonly signatureAlgorithmInput: string;
```

- *Type:* string

---

##### `subjectAlternativeNamesInput`<sup>Optional</sup> <a name="subjectAlternativeNamesInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.subjectAlternativeNamesInput"></a>

```typescript
public readonly subjectAlternativeNamesInput: IResolvable | CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames</a>[]

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.subjectInput"></a>

```typescript
public readonly subjectInput: CertificatesManagementCertificateCertificateConfigSubject;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject">CertificatesManagementCertificateCertificateConfigSubject</a>

---

##### `validityInput`<sup>Optional</sup> <a name="validityInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.validityInput"></a>

```typescript
public readonly validityInput: CertificatesManagementCertificateCertificateConfigValidity;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity">CertificatesManagementCertificateCertificateConfigValidity</a>

---

##### `versionNameInput`<sup>Optional</sup> <a name="versionNameInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.versionNameInput"></a>

```typescript
public readonly versionNameInput: string;
```

- *Type:* string

---

##### `certificateProfileType`<sup>Required</sup> <a name="certificateProfileType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.certificateProfileType"></a>

```typescript
public readonly certificateProfileType: string;
```

- *Type:* string

---

##### `configType`<sup>Required</sup> <a name="configType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.configType"></a>

```typescript
public readonly configType: string;
```

- *Type:* string

---

##### `csrPem`<sup>Required</sup> <a name="csrPem" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.csrPem"></a>

```typescript
public readonly csrPem: string;
```

- *Type:* string

---

##### `issuerCertificateAuthorityId`<sup>Required</sup> <a name="issuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.issuerCertificateAuthorityId"></a>

```typescript
public readonly issuerCertificateAuthorityId: string;
```

- *Type:* string

---

##### `keyAlgorithm`<sup>Required</sup> <a name="keyAlgorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.keyAlgorithm"></a>

```typescript
public readonly keyAlgorithm: string;
```

- *Type:* string

---

##### `signatureAlgorithm`<sup>Required</sup> <a name="signatureAlgorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.signatureAlgorithm"></a>

```typescript
public readonly signatureAlgorithm: string;
```

- *Type:* string

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CertificatesManagementCertificateCertificateConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig">CertificatesManagementCertificateCertificateConfig</a>

---


### CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList <a name="CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

new certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.get"></a>

```typescript
public get(index: number): CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames</a>[]

---


### CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference <a name="CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

new certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames</a>

---


### CertificatesManagementCertificateCertificateConfigSubjectOutputReference <a name="CertificatesManagementCertificateCertificateConfigSubjectOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

new certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetDistinguishedNameQualifier">resetDistinguishedNameQualifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetDomainComponent">resetDomainComponent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetGenerationQualifier">resetGenerationQualifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetGivenName">resetGivenName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetInitials">resetInitials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetLocalityName">resetLocalityName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetOrganizationalUnit">resetOrganizationalUnit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetPseudonym">resetPseudonym</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetSerialNumber">resetSerialNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetStateOrProvinceName">resetStateOrProvinceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetStreet">resetStreet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetSurname">resetSurname</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetTitle">resetTitle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCountry` <a name="resetCountry" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetCountry"></a>

```typescript
public resetCountry(): void
```

##### `resetDistinguishedNameQualifier` <a name="resetDistinguishedNameQualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetDistinguishedNameQualifier"></a>

```typescript
public resetDistinguishedNameQualifier(): void
```

##### `resetDomainComponent` <a name="resetDomainComponent" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetDomainComponent"></a>

```typescript
public resetDomainComponent(): void
```

##### `resetGenerationQualifier` <a name="resetGenerationQualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetGenerationQualifier"></a>

```typescript
public resetGenerationQualifier(): void
```

##### `resetGivenName` <a name="resetGivenName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetGivenName"></a>

```typescript
public resetGivenName(): void
```

##### `resetInitials` <a name="resetInitials" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetInitials"></a>

```typescript
public resetInitials(): void
```

##### `resetLocalityName` <a name="resetLocalityName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetLocalityName"></a>

```typescript
public resetLocalityName(): void
```

##### `resetOrganization` <a name="resetOrganization" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

##### `resetOrganizationalUnit` <a name="resetOrganizationalUnit" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetOrganizationalUnit"></a>

```typescript
public resetOrganizationalUnit(): void
```

##### `resetPseudonym` <a name="resetPseudonym" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetPseudonym"></a>

```typescript
public resetPseudonym(): void
```

##### `resetSerialNumber` <a name="resetSerialNumber" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetSerialNumber"></a>

```typescript
public resetSerialNumber(): void
```

##### `resetStateOrProvinceName` <a name="resetStateOrProvinceName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetStateOrProvinceName"></a>

```typescript
public resetStateOrProvinceName(): void
```

##### `resetStreet` <a name="resetStreet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetStreet"></a>

```typescript
public resetStreet(): void
```

##### `resetSurname` <a name="resetSurname" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetSurname"></a>

```typescript
public resetSurname(): void
```

##### `resetTitle` <a name="resetTitle" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```

##### `resetUserId` <a name="resetUserId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetUserId"></a>

```typescript
public resetUserId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.commonNameInput">commonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.countryInput">countryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.distinguishedNameQualifierInput">distinguishedNameQualifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.domainComponentInput">domainComponentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.generationQualifierInput">generationQualifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.givenNameInput">givenNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.initialsInput">initialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.localityNameInput">localityNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organizationalUnitInput">organizationalUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.pseudonymInput">pseudonymInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.serialNumberInput">serialNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.stateOrProvinceNameInput">stateOrProvinceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.streetInput">streetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.surnameInput">surnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.userIdInput">userIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.commonName">commonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.distinguishedNameQualifier">distinguishedNameQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.domainComponent">domainComponent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.generationQualifier">generationQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.givenName">givenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.initials">initials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.localityName">localityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organizationalUnit">organizationalUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.pseudonym">pseudonym</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.stateOrProvinceName">stateOrProvinceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.street">street</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.surname">surname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject">CertificatesManagementCertificateCertificateConfigSubject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.commonNameInput"></a>

```typescript
public readonly commonNameInput: string;
```

- *Type:* string

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.countryInput"></a>

```typescript
public readonly countryInput: string;
```

- *Type:* string

---

##### `distinguishedNameQualifierInput`<sup>Optional</sup> <a name="distinguishedNameQualifierInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.distinguishedNameQualifierInput"></a>

```typescript
public readonly distinguishedNameQualifierInput: string;
```

- *Type:* string

---

##### `domainComponentInput`<sup>Optional</sup> <a name="domainComponentInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.domainComponentInput"></a>

```typescript
public readonly domainComponentInput: string;
```

- *Type:* string

---

##### `generationQualifierInput`<sup>Optional</sup> <a name="generationQualifierInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.generationQualifierInput"></a>

```typescript
public readonly generationQualifierInput: string;
```

- *Type:* string

---

##### `givenNameInput`<sup>Optional</sup> <a name="givenNameInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.givenNameInput"></a>

```typescript
public readonly givenNameInput: string;
```

- *Type:* string

---

##### `initialsInput`<sup>Optional</sup> <a name="initialsInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.initialsInput"></a>

```typescript
public readonly initialsInput: string;
```

- *Type:* string

---

##### `localityNameInput`<sup>Optional</sup> <a name="localityNameInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.localityNameInput"></a>

```typescript
public readonly localityNameInput: string;
```

- *Type:* string

---

##### `organizationalUnitInput`<sup>Optional</sup> <a name="organizationalUnitInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organizationalUnitInput"></a>

```typescript
public readonly organizationalUnitInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `pseudonymInput`<sup>Optional</sup> <a name="pseudonymInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.pseudonymInput"></a>

```typescript
public readonly pseudonymInput: string;
```

- *Type:* string

---

##### `serialNumberInput`<sup>Optional</sup> <a name="serialNumberInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.serialNumberInput"></a>

```typescript
public readonly serialNumberInput: string;
```

- *Type:* string

---

##### `stateOrProvinceNameInput`<sup>Optional</sup> <a name="stateOrProvinceNameInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.stateOrProvinceNameInput"></a>

```typescript
public readonly stateOrProvinceNameInput: string;
```

- *Type:* string

---

##### `streetInput`<sup>Optional</sup> <a name="streetInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.streetInput"></a>

```typescript
public readonly streetInput: string;
```

- *Type:* string

---

##### `surnameInput`<sup>Optional</sup> <a name="surnameInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.surnameInput"></a>

```typescript
public readonly surnameInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* string

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `distinguishedNameQualifier`<sup>Required</sup> <a name="distinguishedNameQualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.distinguishedNameQualifier"></a>

```typescript
public readonly distinguishedNameQualifier: string;
```

- *Type:* string

---

##### `domainComponent`<sup>Required</sup> <a name="domainComponent" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.domainComponent"></a>

```typescript
public readonly domainComponent: string;
```

- *Type:* string

---

##### `generationQualifier`<sup>Required</sup> <a name="generationQualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.generationQualifier"></a>

```typescript
public readonly generationQualifier: string;
```

- *Type:* string

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* string

---

##### `initials`<sup>Required</sup> <a name="initials" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.initials"></a>

```typescript
public readonly initials: string;
```

- *Type:* string

---

##### `localityName`<sup>Required</sup> <a name="localityName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.localityName"></a>

```typescript
public readonly localityName: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `organizationalUnit`<sup>Required</sup> <a name="organizationalUnit" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organizationalUnit"></a>

```typescript
public readonly organizationalUnit: string;
```

- *Type:* string

---

##### `pseudonym`<sup>Required</sup> <a name="pseudonym" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.pseudonym"></a>

```typescript
public readonly pseudonym: string;
```

- *Type:* string

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `stateOrProvinceName`<sup>Required</sup> <a name="stateOrProvinceName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.stateOrProvinceName"></a>

```typescript
public readonly stateOrProvinceName: string;
```

- *Type:* string

---

##### `street`<sup>Required</sup> <a name="street" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.street"></a>

```typescript
public readonly street: string;
```

- *Type:* string

---

##### `surname`<sup>Required</sup> <a name="surname" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.surname"></a>

```typescript
public readonly surname: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CertificatesManagementCertificateCertificateConfigSubject;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject">CertificatesManagementCertificateCertificateConfigSubject</a>

---


### CertificatesManagementCertificateCertificateConfigValidityOutputReference <a name="CertificatesManagementCertificateCertificateConfigValidityOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

new certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.resetTimeOfValidityNotBefore">resetTimeOfValidityNotBefore</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeOfValidityNotBefore` <a name="resetTimeOfValidityNotBefore" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.resetTimeOfValidityNotBefore"></a>

```typescript
public resetTimeOfValidityNotBefore(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotAfterInput">timeOfValidityNotAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotBeforeInput">timeOfValidityNotBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotAfter">timeOfValidityNotAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotBefore">timeOfValidityNotBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity">CertificatesManagementCertificateCertificateConfigValidity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeOfValidityNotAfterInput`<sup>Optional</sup> <a name="timeOfValidityNotAfterInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotAfterInput"></a>

```typescript
public readonly timeOfValidityNotAfterInput: string;
```

- *Type:* string

---

##### `timeOfValidityNotBeforeInput`<sup>Optional</sup> <a name="timeOfValidityNotBeforeInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotBeforeInput"></a>

```typescript
public readonly timeOfValidityNotBeforeInput: string;
```

- *Type:* string

---

##### `timeOfValidityNotAfter`<sup>Required</sup> <a name="timeOfValidityNotAfter" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotAfter"></a>

```typescript
public readonly timeOfValidityNotAfter: string;
```

- *Type:* string

---

##### `timeOfValidityNotBefore`<sup>Required</sup> <a name="timeOfValidityNotBefore" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotBefore"></a>

```typescript
public readonly timeOfValidityNotBefore: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CertificatesManagementCertificateCertificateConfigValidity;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity">CertificatesManagementCertificateCertificateConfigValidity</a>

---


### CertificatesManagementCertificateCertificateRevocationListDetailsList <a name="CertificatesManagementCertificateCertificateRevocationListDetailsList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

new certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.get"></a>

```typescript
public get(index: number): CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList <a name="CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

new certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.get"></a>

```typescript
public get(index: number): CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference <a name="CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

new certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageBucketName">objectStorageBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageNamespace">objectStorageNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageObjectNameFormat">objectStorageObjectNameFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig">CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectStorageBucketName`<sup>Required</sup> <a name="objectStorageBucketName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageBucketName"></a>

```typescript
public readonly objectStorageBucketName: string;
```

- *Type:* string

---

##### `objectStorageNamespace`<sup>Required</sup> <a name="objectStorageNamespace" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageNamespace"></a>

```typescript
public readonly objectStorageNamespace: string;
```

- *Type:* string

---

##### `objectStorageObjectNameFormat`<sup>Required</sup> <a name="objectStorageObjectNameFormat" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageObjectNameFormat"></a>

```typescript
public readonly objectStorageObjectNameFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig">CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig</a>

---


### CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference <a name="CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

new certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.customFormattedUrls">customFormattedUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.objectStorageConfig">objectStorageConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList">CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetails">CertificatesManagementCertificateCertificateRevocationListDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customFormattedUrls`<sup>Required</sup> <a name="customFormattedUrls" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.customFormattedUrls"></a>

```typescript
public readonly customFormattedUrls: string[];
```

- *Type:* string[]

---

##### `objectStorageConfig`<sup>Required</sup> <a name="objectStorageConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.objectStorageConfig"></a>

```typescript
public readonly objectStorageConfig: CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList">CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CertificatesManagementCertificateCertificateRevocationListDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetails">CertificatesManagementCertificateCertificateRevocationListDetails</a>

---


### CertificatesManagementCertificateCertificateRulesList <a name="CertificatesManagementCertificateCertificateRulesList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

new certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.get"></a>

```typescript
public get(index: number): CertificatesManagementCertificateCertificateRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules">CertificatesManagementCertificateCertificateRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificatesManagementCertificateCertificateRules[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules">CertificatesManagementCertificateCertificateRules</a>[]

---


### CertificatesManagementCertificateCertificateRulesOutputReference <a name="CertificatesManagementCertificateCertificateRulesOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

new certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.advanceRenewalPeriodInput">advanceRenewalPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.renewalIntervalInput">renewalIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.ruleTypeInput">ruleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.advanceRenewalPeriod">advanceRenewalPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.renewalInterval">renewalInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.ruleType">ruleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules">CertificatesManagementCertificateCertificateRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `advanceRenewalPeriodInput`<sup>Optional</sup> <a name="advanceRenewalPeriodInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.advanceRenewalPeriodInput"></a>

```typescript
public readonly advanceRenewalPeriodInput: string;
```

- *Type:* string

---

##### `renewalIntervalInput`<sup>Optional</sup> <a name="renewalIntervalInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.renewalIntervalInput"></a>

```typescript
public readonly renewalIntervalInput: string;
```

- *Type:* string

---

##### `ruleTypeInput`<sup>Optional</sup> <a name="ruleTypeInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.ruleTypeInput"></a>

```typescript
public readonly ruleTypeInput: string;
```

- *Type:* string

---

##### `advanceRenewalPeriod`<sup>Required</sup> <a name="advanceRenewalPeriod" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.advanceRenewalPeriod"></a>

```typescript
public readonly advanceRenewalPeriod: string;
```

- *Type:* string

---

##### `renewalInterval`<sup>Required</sup> <a name="renewalInterval" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.renewalInterval"></a>

```typescript
public readonly renewalInterval: string;
```

- *Type:* string

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.ruleType"></a>

```typescript
public readonly ruleType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificatesManagementCertificateCertificateRules;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules">CertificatesManagementCertificateCertificateRules</a>

---


### CertificatesManagementCertificateCurrentVersionList <a name="CertificatesManagementCertificateCurrentVersionList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

new certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.get"></a>

```typescript
public get(index: number): CertificatesManagementCertificateCurrentVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CertificatesManagementCertificateCurrentVersionOutputReference <a name="CertificatesManagementCertificateCurrentVersionOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

new certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.issuerCaVersionNumber">issuerCaVersionNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.revocationStatus">revocationStatus</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList">CertificatesManagementCertificateCurrentVersionRevocationStatusList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.stages">stages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList">CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.timeOfDeletion">timeOfDeletion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.validity">validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList">CertificatesManagementCertificateCurrentVersionValidityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.versionName">versionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.versionNumber">versionNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersion">CertificatesManagementCertificateCurrentVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `issuerCaVersionNumber`<sup>Required</sup> <a name="issuerCaVersionNumber" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.issuerCaVersionNumber"></a>

```typescript
public readonly issuerCaVersionNumber: string;
```

- *Type:* string

---

##### `revocationStatus`<sup>Required</sup> <a name="revocationStatus" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.revocationStatus"></a>

```typescript
public readonly revocationStatus: CertificatesManagementCertificateCurrentVersionRevocationStatusList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList">CertificatesManagementCertificateCurrentVersionRevocationStatusList</a>

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `stages`<sup>Required</sup> <a name="stages" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.stages"></a>

```typescript
public readonly stages: string[];
```

- *Type:* string[]

---

##### `subjectAlternativeNames`<sup>Required</sup> <a name="subjectAlternativeNames" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.subjectAlternativeNames"></a>

```typescript
public readonly subjectAlternativeNames: CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList">CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeOfDeletion`<sup>Required</sup> <a name="timeOfDeletion" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.timeOfDeletion"></a>

```typescript
public readonly timeOfDeletion: string;
```

- *Type:* string

---

##### `validity`<sup>Required</sup> <a name="validity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.validity"></a>

```typescript
public readonly validity: CertificatesManagementCertificateCurrentVersionValidityList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList">CertificatesManagementCertificateCurrentVersionValidityList</a>

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.versionNumber"></a>

```typescript
public readonly versionNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CertificatesManagementCertificateCurrentVersion;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersion">CertificatesManagementCertificateCurrentVersion</a>

---


### CertificatesManagementCertificateCurrentVersionRevocationStatusList <a name="CertificatesManagementCertificateCurrentVersionRevocationStatusList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

new certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.get"></a>

```typescript
public get(index: number): CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference <a name="CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

new certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.revocationReason">revocationReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.timeOfRevocation">timeOfRevocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatus">CertificatesManagementCertificateCurrentVersionRevocationStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `revocationReason`<sup>Required</sup> <a name="revocationReason" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.revocationReason"></a>

```typescript
public readonly revocationReason: string;
```

- *Type:* string

---

##### `timeOfRevocation`<sup>Required</sup> <a name="timeOfRevocation" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.timeOfRevocation"></a>

```typescript
public readonly timeOfRevocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CertificatesManagementCertificateCurrentVersionRevocationStatus;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatus">CertificatesManagementCertificateCurrentVersionRevocationStatus</a>

---


### CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList <a name="CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

new certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.get"></a>

```typescript
public get(index: number): CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference <a name="CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

new certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames">CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames">CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames</a>

---


### CertificatesManagementCertificateCurrentVersionValidityList <a name="CertificatesManagementCertificateCurrentVersionValidityList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

new certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.get"></a>

```typescript
public get(index: number): CertificatesManagementCertificateCurrentVersionValidityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CertificatesManagementCertificateCurrentVersionValidityOutputReference <a name="CertificatesManagementCertificateCurrentVersionValidityOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

new certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.timeOfValidityNotAfter">timeOfValidityNotAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.timeOfValidityNotBefore">timeOfValidityNotBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidity">CertificatesManagementCertificateCurrentVersionValidity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeOfValidityNotAfter`<sup>Required</sup> <a name="timeOfValidityNotAfter" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.timeOfValidityNotAfter"></a>

```typescript
public readonly timeOfValidityNotAfter: string;
```

- *Type:* string

---

##### `timeOfValidityNotBefore`<sup>Required</sup> <a name="timeOfValidityNotBefore" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.timeOfValidityNotBefore"></a>

```typescript
public readonly timeOfValidityNotBefore: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CertificatesManagementCertificateCurrentVersionValidity;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidity">CertificatesManagementCertificateCurrentVersionValidity</a>

---


### CertificatesManagementCertificateSubjectList <a name="CertificatesManagementCertificateSubjectList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

new certificatesManagementCertificate.CertificatesManagementCertificateSubjectList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.get"></a>

```typescript
public get(index: number): CertificatesManagementCertificateSubjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CertificatesManagementCertificateSubjectOutputReference <a name="CertificatesManagementCertificateSubjectOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

new certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.commonName">commonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.distinguishedNameQualifier">distinguishedNameQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.domainComponent">domainComponent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.generationQualifier">generationQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.givenName">givenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.initials">initials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.localityName">localityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.organizationalUnit">organizationalUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.pseudonym">pseudonym</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.stateOrProvinceName">stateOrProvinceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.street">street</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.surname">surname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubject">CertificatesManagementCertificateSubject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `distinguishedNameQualifier`<sup>Required</sup> <a name="distinguishedNameQualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.distinguishedNameQualifier"></a>

```typescript
public readonly distinguishedNameQualifier: string;
```

- *Type:* string

---

##### `domainComponent`<sup>Required</sup> <a name="domainComponent" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.domainComponent"></a>

```typescript
public readonly domainComponent: string;
```

- *Type:* string

---

##### `generationQualifier`<sup>Required</sup> <a name="generationQualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.generationQualifier"></a>

```typescript
public readonly generationQualifier: string;
```

- *Type:* string

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* string

---

##### `initials`<sup>Required</sup> <a name="initials" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.initials"></a>

```typescript
public readonly initials: string;
```

- *Type:* string

---

##### `localityName`<sup>Required</sup> <a name="localityName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.localityName"></a>

```typescript
public readonly localityName: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `organizationalUnit`<sup>Required</sup> <a name="organizationalUnit" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.organizationalUnit"></a>

```typescript
public readonly organizationalUnit: string;
```

- *Type:* string

---

##### `pseudonym`<sup>Required</sup> <a name="pseudonym" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.pseudonym"></a>

```typescript
public readonly pseudonym: string;
```

- *Type:* string

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `stateOrProvinceName`<sup>Required</sup> <a name="stateOrProvinceName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.stateOrProvinceName"></a>

```typescript
public readonly stateOrProvinceName: string;
```

- *Type:* string

---

##### `street`<sup>Required</sup> <a name="street" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.street"></a>

```typescript
public readonly street: string;
```

- *Type:* string

---

##### `surname`<sup>Required</sup> <a name="surname" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.surname"></a>

```typescript
public readonly surname: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CertificatesManagementCertificateSubject;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubject">CertificatesManagementCertificateSubject</a>

---


### CertificatesManagementCertificateTimeoutsOutputReference <a name="CertificatesManagementCertificateTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.Initializer"></a>

```typescript
import { certificatesManagementCertificate } from 'rhizo-co-terraform-provider-oci'

new certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts">CertificatesManagementCertificateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificatesManagementCertificateTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts">CertificatesManagementCertificateTimeouts</a>

---



