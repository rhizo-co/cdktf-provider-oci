# `dataOciCertificatesManagementCertificateAuthorityVersion` Submodule <a name="`dataOciCertificatesManagementCertificateAuthorityVersion` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCertificatesManagementCertificateAuthorityVersion <a name="DataOciCertificatesManagementCertificateAuthorityVersion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_version oci_certificates_management_certificate_authority_version}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorityVersion } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion(scope: Construct, id: string, config: DataOciCertificatesManagementCertificateAuthorityVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig">DataOciCertificatesManagementCertificateAuthorityVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig">DataOciCertificatesManagementCertificateAuthorityVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCertificatesManagementCertificateAuthorityVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.isConstruct"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorityVersion } from 'rhizo-co-terraform-provider-oci'

dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.isTerraformElement"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorityVersion } from 'rhizo-co-terraform-provider-oci'

dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.isTerraformDataSource"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorityVersion } from 'rhizo-co-terraform-provider-oci'

dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.generateConfigForImport"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorityVersion } from 'rhizo-co-terraform-provider-oci'

dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCertificatesManagementCertificateAuthorityVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCertificatesManagementCertificateAuthorityVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCertificatesManagementCertificateAuthorityVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCertificatesManagementCertificateAuthorityVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.issuerCaVersionNumber">issuerCaVersionNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.revocationStatus">revocationStatus</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList">DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.stages">stages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList">DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.timeOfDeletion">timeOfDeletion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.validity">validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList">DataOciCertificatesManagementCertificateAuthorityVersionValidityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.versionName">versionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.versionNumber">versionNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.certificateAuthorityIdInput">certificateAuthorityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.certificateAuthorityVersionNumberInput">certificateAuthorityVersionNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.certificateAuthorityId">certificateAuthorityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.certificateAuthorityVersionNumber">certificateAuthorityVersionNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `issuerCaVersionNumber`<sup>Required</sup> <a name="issuerCaVersionNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.issuerCaVersionNumber"></a>

```typescript
public readonly issuerCaVersionNumber: string;
```

- *Type:* string

---

##### `revocationStatus`<sup>Required</sup> <a name="revocationStatus" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.revocationStatus"></a>

```typescript
public readonly revocationStatus: DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList">DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList</a>

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `stages`<sup>Required</sup> <a name="stages" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.stages"></a>

```typescript
public readonly stages: string[];
```

- *Type:* string[]

---

##### `subjectAlternativeNames`<sup>Required</sup> <a name="subjectAlternativeNames" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.subjectAlternativeNames"></a>

```typescript
public readonly subjectAlternativeNames: DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList">DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeOfDeletion`<sup>Required</sup> <a name="timeOfDeletion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.timeOfDeletion"></a>

```typescript
public readonly timeOfDeletion: string;
```

- *Type:* string

---

##### `validity`<sup>Required</sup> <a name="validity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.validity"></a>

```typescript
public readonly validity: DataOciCertificatesManagementCertificateAuthorityVersionValidityList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList">DataOciCertificatesManagementCertificateAuthorityVersionValidityList</a>

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.versionNumber"></a>

```typescript
public readonly versionNumber: string;
```

- *Type:* string

---

##### `certificateAuthorityIdInput`<sup>Optional</sup> <a name="certificateAuthorityIdInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.certificateAuthorityIdInput"></a>

```typescript
public readonly certificateAuthorityIdInput: string;
```

- *Type:* string

---

##### `certificateAuthorityVersionNumberInput`<sup>Optional</sup> <a name="certificateAuthorityVersionNumberInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.certificateAuthorityVersionNumberInput"></a>

```typescript
public readonly certificateAuthorityVersionNumberInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `certificateAuthorityId`<sup>Required</sup> <a name="certificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.certificateAuthorityId"></a>

```typescript
public readonly certificateAuthorityId: string;
```

- *Type:* string

---

##### `certificateAuthorityVersionNumber`<sup>Required</sup> <a name="certificateAuthorityVersionNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.certificateAuthorityVersionNumber"></a>

```typescript
public readonly certificateAuthorityVersionNumber: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCertificatesManagementCertificateAuthorityVersionConfig <a name="DataOciCertificatesManagementCertificateAuthorityVersionConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorityVersion } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateAuthorityVersionConfig: dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.certificateAuthorityId">certificateAuthorityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_version#certificate_authority_id DataOciCertificatesManagementCertificateAuthorityVersion#certificate_authority_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.certificateAuthorityVersionNumber">certificateAuthorityVersionNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_version#certificate_authority_version_number DataOciCertificatesManagementCertificateAuthorityVersion#certificate_authority_version_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_version#id DataOciCertificatesManagementCertificateAuthorityVersion#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificateAuthorityId`<sup>Required</sup> <a name="certificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.certificateAuthorityId"></a>

```typescript
public readonly certificateAuthorityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_version#certificate_authority_id DataOciCertificatesManagementCertificateAuthorityVersion#certificate_authority_id}.

---

##### `certificateAuthorityVersionNumber`<sup>Required</sup> <a name="certificateAuthorityVersionNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.certificateAuthorityVersionNumber"></a>

```typescript
public readonly certificateAuthorityVersionNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_version#certificate_authority_version_number DataOciCertificatesManagementCertificateAuthorityVersion#certificate_authority_version_number}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_version#id DataOciCertificatesManagementCertificateAuthorityVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus <a name="DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorityVersion } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus: dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus = { ... }
```


### DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames <a name="DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorityVersion } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames: dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames = { ... }
```


### DataOciCertificatesManagementCertificateAuthorityVersionValidity <a name="DataOciCertificatesManagementCertificateAuthorityVersionValidity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidity.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorityVersion } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateAuthorityVersionValidity: dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidity = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList <a name="DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorityVersion } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.get"></a>

```typescript
public get(index: number): DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference <a name="DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorityVersion } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.property.revocationReason">revocationReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.property.timeOfRevocation">timeOfRevocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus">DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `revocationReason`<sup>Required</sup> <a name="revocationReason" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.property.revocationReason"></a>

```typescript
public readonly revocationReason: string;
```

- *Type:* string

---

##### `timeOfRevocation`<sup>Required</sup> <a name="timeOfRevocation" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.property.timeOfRevocation"></a>

```typescript
public readonly timeOfRevocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus">DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus</a>

---


### DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList <a name="DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorityVersion } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.get"></a>

```typescript
public get(index: number): DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference <a name="DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorityVersion } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames">DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames">DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames</a>

---


### DataOciCertificatesManagementCertificateAuthorityVersionValidityList <a name="DataOciCertificatesManagementCertificateAuthorityVersionValidityList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorityVersion } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.get"></a>

```typescript
public get(index: number): DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference <a name="DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorityVersion } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.property.timeOfValidityNotAfter">timeOfValidityNotAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.property.timeOfValidityNotBefore">timeOfValidityNotBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidity">DataOciCertificatesManagementCertificateAuthorityVersionValidity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeOfValidityNotAfter`<sup>Required</sup> <a name="timeOfValidityNotAfter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.property.timeOfValidityNotAfter"></a>

```typescript
public readonly timeOfValidityNotAfter: string;
```

- *Type:* string

---

##### `timeOfValidityNotBefore`<sup>Required</sup> <a name="timeOfValidityNotBefore" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.property.timeOfValidityNotBefore"></a>

```typescript
public readonly timeOfValidityNotBefore: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCertificatesManagementCertificateAuthorityVersionValidity;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidity">DataOciCertificatesManagementCertificateAuthorityVersionValidity</a>

---



