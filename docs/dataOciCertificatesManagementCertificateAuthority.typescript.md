# `dataOciCertificatesManagementCertificateAuthority` Submodule <a name="`dataOciCertificatesManagementCertificateAuthority` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCertificatesManagementCertificateAuthority <a name="DataOciCertificatesManagementCertificateAuthority" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority oci_certificates_management_certificate_authority}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority(scope: Construct, id: string, config: DataOciCertificatesManagementCertificateAuthorityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig">DataOciCertificatesManagementCertificateAuthorityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig">DataOciCertificatesManagementCertificateAuthorityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCertificatesManagementCertificateAuthority resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.isConstruct"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.isTerraformElement"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.isTerraformDataSource"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.generateConfigForImport"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCertificatesManagementCertificateAuthority resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCertificatesManagementCertificateAuthority to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCertificatesManagementCertificateAuthority that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCertificatesManagementCertificateAuthority to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.certificateAuthorityConfig">certificateAuthorityConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList">DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.certificateAuthorityRules">certificateAuthorityRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList">DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.certificateRevocationListDetails">certificateRevocationListDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList">DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.configType">configType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.currentVersion">currentVersion</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList">DataOciCertificatesManagementCertificateAuthorityCurrentVersionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.issuerCertificateAuthorityId">issuerCertificateAuthorityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.signingAlgorithm">signingAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.subject">subject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList">DataOciCertificatesManagementCertificateAuthoritySubjectList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.timeOfDeletion">timeOfDeletion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.certificateAuthorityIdInput">certificateAuthorityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.certificateAuthorityId">certificateAuthorityId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `certificateAuthorityConfig`<sup>Required</sup> <a name="certificateAuthorityConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.certificateAuthorityConfig"></a>

```typescript
public readonly certificateAuthorityConfig: DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList">DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList</a>

---

##### `certificateAuthorityRules`<sup>Required</sup> <a name="certificateAuthorityRules" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.certificateAuthorityRules"></a>

```typescript
public readonly certificateAuthorityRules: DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList">DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList</a>

---

##### `certificateRevocationListDetails`<sup>Required</sup> <a name="certificateRevocationListDetails" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.certificateRevocationListDetails"></a>

```typescript
public readonly certificateRevocationListDetails: DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList">DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `configType`<sup>Required</sup> <a name="configType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.configType"></a>

```typescript
public readonly configType: string;
```

- *Type:* string

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.currentVersion"></a>

```typescript
public readonly currentVersion: DataOciCertificatesManagementCertificateAuthorityCurrentVersionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList">DataOciCertificatesManagementCertificateAuthorityCurrentVersionList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuerCertificateAuthorityId`<sup>Required</sup> <a name="issuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.issuerCertificateAuthorityId"></a>

```typescript
public readonly issuerCertificateAuthorityId: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `signingAlgorithm`<sup>Required</sup> <a name="signingAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.signingAlgorithm"></a>

```typescript
public readonly signingAlgorithm: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.subject"></a>

```typescript
public readonly subject: DataOciCertificatesManagementCertificateAuthoritySubjectList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList">DataOciCertificatesManagementCertificateAuthoritySubjectList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeOfDeletion`<sup>Required</sup> <a name="timeOfDeletion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.timeOfDeletion"></a>

```typescript
public readonly timeOfDeletion: string;
```

- *Type:* string

---

##### `certificateAuthorityIdInput`<sup>Optional</sup> <a name="certificateAuthorityIdInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.certificateAuthorityIdInput"></a>

```typescript
public readonly certificateAuthorityIdInput: string;
```

- *Type:* string

---

##### `certificateAuthorityId`<sup>Required</sup> <a name="certificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.certificateAuthorityId"></a>

```typescript
public readonly certificateAuthorityId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthority.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfig <a name="DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfig.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfig: dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfig = { ... }
```


### DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject <a name="DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject: dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject = { ... }
```


### DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity <a name="DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity: dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity = { ... }
```


### DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRules <a name="DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRules" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRules.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRules: dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRules = { ... }
```


### DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetails <a name="DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetails" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetails.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetails: dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetails = { ... }
```


### DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig <a name="DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig: dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig = { ... }
```


### DataOciCertificatesManagementCertificateAuthorityConfig <a name="DataOciCertificatesManagementCertificateAuthorityConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateAuthorityConfig: dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig.property.certificateAuthorityId">certificateAuthorityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority#certificate_authority_id DataOciCertificatesManagementCertificateAuthority#certificate_authority_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificateAuthorityId`<sup>Required</sup> <a name="certificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityConfig.property.certificateAuthorityId"></a>

```typescript
public readonly certificateAuthorityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority#certificate_authority_id DataOciCertificatesManagementCertificateAuthority#certificate_authority_id}.

---

### DataOciCertificatesManagementCertificateAuthorityCurrentVersion <a name="DataOciCertificatesManagementCertificateAuthorityCurrentVersion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersion"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersion.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateAuthorityCurrentVersion: dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersion = { ... }
```


### DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus <a name="DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus: dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus = { ... }
```


### DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidity <a name="DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidity.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateAuthorityCurrentVersionValidity: dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidity = { ... }
```


### DataOciCertificatesManagementCertificateAuthoritySubject <a name="DataOciCertificatesManagementCertificateAuthoritySubject" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubject.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateAuthoritySubject: dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubject = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList <a name="DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.get"></a>

```typescript
public get(index: number): DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference <a name="DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.configType">configType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.issuerCertificateAuthorityId">issuerCertificateAuthorityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.signingAlgorithm">signingAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.subject">subject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList">DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.validity">validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList">DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.versionName">versionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfig">DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configType`<sup>Required</sup> <a name="configType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.configType"></a>

```typescript
public readonly configType: string;
```

- *Type:* string

---

##### `issuerCertificateAuthorityId`<sup>Required</sup> <a name="issuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.issuerCertificateAuthorityId"></a>

```typescript
public readonly issuerCertificateAuthorityId: string;
```

- *Type:* string

---

##### `signingAlgorithm`<sup>Required</sup> <a name="signingAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.signingAlgorithm"></a>

```typescript
public readonly signingAlgorithm: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.subject"></a>

```typescript
public readonly subject: DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList">DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList</a>

---

##### `validity`<sup>Required</sup> <a name="validity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.validity"></a>

```typescript
public readonly validity: DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList">DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList</a>

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfig">DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfig</a>

---


### DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList <a name="DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.get"></a>

```typescript
public get(index: number): DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference <a name="DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.commonName">commonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.distinguishedNameQualifier">distinguishedNameQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.domainComponent">domainComponent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.generationQualifier">generationQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.givenName">givenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.initials">initials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.localityName">localityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.organizationalUnit">organizationalUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.pseudonym">pseudonym</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.stateOrProvinceName">stateOrProvinceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.street">street</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.surname">surname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject">DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `distinguishedNameQualifier`<sup>Required</sup> <a name="distinguishedNameQualifier" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.distinguishedNameQualifier"></a>

```typescript
public readonly distinguishedNameQualifier: string;
```

- *Type:* string

---

##### `domainComponent`<sup>Required</sup> <a name="domainComponent" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.domainComponent"></a>

```typescript
public readonly domainComponent: string;
```

- *Type:* string

---

##### `generationQualifier`<sup>Required</sup> <a name="generationQualifier" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.generationQualifier"></a>

```typescript
public readonly generationQualifier: string;
```

- *Type:* string

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* string

---

##### `initials`<sup>Required</sup> <a name="initials" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.initials"></a>

```typescript
public readonly initials: string;
```

- *Type:* string

---

##### `localityName`<sup>Required</sup> <a name="localityName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.localityName"></a>

```typescript
public readonly localityName: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `organizationalUnit`<sup>Required</sup> <a name="organizationalUnit" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.organizationalUnit"></a>

```typescript
public readonly organizationalUnit: string;
```

- *Type:* string

---

##### `pseudonym`<sup>Required</sup> <a name="pseudonym" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.pseudonym"></a>

```typescript
public readonly pseudonym: string;
```

- *Type:* string

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `stateOrProvinceName`<sup>Required</sup> <a name="stateOrProvinceName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.stateOrProvinceName"></a>

```typescript
public readonly stateOrProvinceName: string;
```

- *Type:* string

---

##### `street`<sup>Required</sup> <a name="street" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.street"></a>

```typescript
public readonly street: string;
```

- *Type:* string

---

##### `surname`<sup>Required</sup> <a name="surname" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.surname"></a>

```typescript
public readonly surname: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject">DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject</a>

---


### DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList <a name="DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.get"></a>

```typescript
public get(index: number): DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference <a name="DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotAfter">timeOfValidityNotAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotBefore">timeOfValidityNotBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity">DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeOfValidityNotAfter`<sup>Required</sup> <a name="timeOfValidityNotAfter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotAfter"></a>

```typescript
public readonly timeOfValidityNotAfter: string;
```

- *Type:* string

---

##### `timeOfValidityNotBefore`<sup>Required</sup> <a name="timeOfValidityNotBefore" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotBefore"></a>

```typescript
public readonly timeOfValidityNotBefore: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity">DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity</a>

---


### DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList <a name="DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.get"></a>

```typescript
public get(index: number): DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference <a name="DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.certificateAuthorityMaxValidityDuration">certificateAuthorityMaxValidityDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.leafCertificateMaxValidityDuration">leafCertificateMaxValidityDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.ruleType">ruleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRules">DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateAuthorityMaxValidityDuration`<sup>Required</sup> <a name="certificateAuthorityMaxValidityDuration" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.certificateAuthorityMaxValidityDuration"></a>

```typescript
public readonly certificateAuthorityMaxValidityDuration: string;
```

- *Type:* string

---

##### `leafCertificateMaxValidityDuration`<sup>Required</sup> <a name="leafCertificateMaxValidityDuration" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.leafCertificateMaxValidityDuration"></a>

```typescript
public readonly leafCertificateMaxValidityDuration: string;
```

- *Type:* string

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.ruleType"></a>

```typescript
public readonly ruleType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRules">DataOciCertificatesManagementCertificateAuthorityCertificateAuthorityRules</a>

---


### DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList <a name="DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.get"></a>

```typescript
public get(index: number): DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList <a name="DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.get"></a>

```typescript
public get(index: number): DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference <a name="DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageBucketName">objectStorageBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageNamespace">objectStorageNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageObjectNameFormat">objectStorageObjectNameFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig">DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectStorageBucketName`<sup>Required</sup> <a name="objectStorageBucketName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageBucketName"></a>

```typescript
public readonly objectStorageBucketName: string;
```

- *Type:* string

---

##### `objectStorageNamespace`<sup>Required</sup> <a name="objectStorageNamespace" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageNamespace"></a>

```typescript
public readonly objectStorageNamespace: string;
```

- *Type:* string

---

##### `objectStorageObjectNameFormat`<sup>Required</sup> <a name="objectStorageObjectNameFormat" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageObjectNameFormat"></a>

```typescript
public readonly objectStorageObjectNameFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig">DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig</a>

---


### DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference <a name="DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.customFormattedUrls">customFormattedUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.objectStorageConfig">objectStorageConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList">DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetails">DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customFormattedUrls`<sup>Required</sup> <a name="customFormattedUrls" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.customFormattedUrls"></a>

```typescript
public readonly customFormattedUrls: string[];
```

- *Type:* string[]

---

##### `objectStorageConfig`<sup>Required</sup> <a name="objectStorageConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.objectStorageConfig"></a>

```typescript
public readonly objectStorageConfig: DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList">DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetails">DataOciCertificatesManagementCertificateAuthorityCertificateRevocationListDetails</a>

---


### DataOciCertificatesManagementCertificateAuthorityCurrentVersionList <a name="DataOciCertificatesManagementCertificateAuthorityCurrentVersionList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.get"></a>

```typescript
public get(index: number): DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference <a name="DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.certificateAuthorityId">certificateAuthorityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.issuerCaVersionNumber">issuerCaVersionNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.revocationStatus">revocationStatus</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList">DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.stages">stages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.timeOfDeletion">timeOfDeletion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.validity">validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList">DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.versionName">versionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.versionNumber">versionNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersion">DataOciCertificatesManagementCertificateAuthorityCurrentVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateAuthorityId`<sup>Required</sup> <a name="certificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.certificateAuthorityId"></a>

```typescript
public readonly certificateAuthorityId: string;
```

- *Type:* string

---

##### `issuerCaVersionNumber`<sup>Required</sup> <a name="issuerCaVersionNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.issuerCaVersionNumber"></a>

```typescript
public readonly issuerCaVersionNumber: string;
```

- *Type:* string

---

##### `revocationStatus`<sup>Required</sup> <a name="revocationStatus" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.revocationStatus"></a>

```typescript
public readonly revocationStatus: DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList">DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList</a>

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `stages`<sup>Required</sup> <a name="stages" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.stages"></a>

```typescript
public readonly stages: string[];
```

- *Type:* string[]

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeOfDeletion`<sup>Required</sup> <a name="timeOfDeletion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.timeOfDeletion"></a>

```typescript
public readonly timeOfDeletion: string;
```

- *Type:* string

---

##### `validity`<sup>Required</sup> <a name="validity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.validity"></a>

```typescript
public readonly validity: DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList">DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList</a>

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.versionNumber"></a>

```typescript
public readonly versionNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCertificatesManagementCertificateAuthorityCurrentVersion;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersion">DataOciCertificatesManagementCertificateAuthorityCurrentVersion</a>

---


### DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList <a name="DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.get"></a>

```typescript
public get(index: number): DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference <a name="DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.revocationReason">revocationReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.timeOfRevocation">timeOfRevocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus">DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `revocationReason`<sup>Required</sup> <a name="revocationReason" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.revocationReason"></a>

```typescript
public readonly revocationReason: string;
```

- *Type:* string

---

##### `timeOfRevocation`<sup>Required</sup> <a name="timeOfRevocation" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.timeOfRevocation"></a>

```typescript
public readonly timeOfRevocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus">DataOciCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus</a>

---


### DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList <a name="DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.get"></a>

```typescript
public get(index: number): DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference <a name="DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.timeOfValidityNotAfter">timeOfValidityNotAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.timeOfValidityNotBefore">timeOfValidityNotBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidity">DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeOfValidityNotAfter`<sup>Required</sup> <a name="timeOfValidityNotAfter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.timeOfValidityNotAfter"></a>

```typescript
public readonly timeOfValidityNotAfter: string;
```

- *Type:* string

---

##### `timeOfValidityNotBefore`<sup>Required</sup> <a name="timeOfValidityNotBefore" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.timeOfValidityNotBefore"></a>

```typescript
public readonly timeOfValidityNotBefore: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidity;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidity">DataOciCertificatesManagementCertificateAuthorityCurrentVersionValidity</a>

---


### DataOciCertificatesManagementCertificateAuthoritySubjectList <a name="DataOciCertificatesManagementCertificateAuthoritySubjectList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.get"></a>

```typescript
public get(index: number): DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthority } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.commonName">commonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.distinguishedNameQualifier">distinguishedNameQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.domainComponent">domainComponent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.generationQualifier">generationQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.givenName">givenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.initials">initials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.localityName">localityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.organizationalUnit">organizationalUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.pseudonym">pseudonym</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.stateOrProvinceName">stateOrProvinceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.street">street</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.surname">surname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubject">DataOciCertificatesManagementCertificateAuthoritySubject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `distinguishedNameQualifier`<sup>Required</sup> <a name="distinguishedNameQualifier" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.distinguishedNameQualifier"></a>

```typescript
public readonly distinguishedNameQualifier: string;
```

- *Type:* string

---

##### `domainComponent`<sup>Required</sup> <a name="domainComponent" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.domainComponent"></a>

```typescript
public readonly domainComponent: string;
```

- *Type:* string

---

##### `generationQualifier`<sup>Required</sup> <a name="generationQualifier" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.generationQualifier"></a>

```typescript
public readonly generationQualifier: string;
```

- *Type:* string

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* string

---

##### `initials`<sup>Required</sup> <a name="initials" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.initials"></a>

```typescript
public readonly initials: string;
```

- *Type:* string

---

##### `localityName`<sup>Required</sup> <a name="localityName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.localityName"></a>

```typescript
public readonly localityName: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `organizationalUnit`<sup>Required</sup> <a name="organizationalUnit" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.organizationalUnit"></a>

```typescript
public readonly organizationalUnit: string;
```

- *Type:* string

---

##### `pseudonym`<sup>Required</sup> <a name="pseudonym" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.pseudonym"></a>

```typescript
public readonly pseudonym: string;
```

- *Type:* string

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `stateOrProvinceName`<sup>Required</sup> <a name="stateOrProvinceName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.stateOrProvinceName"></a>

```typescript
public readonly stateOrProvinceName: string;
```

- *Type:* string

---

##### `street`<sup>Required</sup> <a name="street" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.street"></a>

```typescript
public readonly street: string;
```

- *Type:* string

---

##### `surname`<sup>Required</sup> <a name="surname" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.surname"></a>

```typescript
public readonly surname: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCertificatesManagementCertificateAuthoritySubject;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthority.DataOciCertificatesManagementCertificateAuthoritySubject">DataOciCertificatesManagementCertificateAuthoritySubject</a>

---



