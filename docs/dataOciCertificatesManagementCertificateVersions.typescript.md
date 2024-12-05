# `dataOciCertificatesManagementCertificateVersions` Submodule <a name="`dataOciCertificatesManagementCertificateVersions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCertificatesManagementCertificateVersions <a name="DataOciCertificatesManagementCertificateVersions" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_versions oci_certificates_management_certificate_versions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions(scope: Construct, id: string, config: DataOciCertificatesManagementCertificateVersionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsConfig">DataOciCertificatesManagementCertificateVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsConfig">DataOciCertificatesManagementCertificateVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.resetVersionNumber">resetVersionNumber</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCertificatesManagementCertificateVersionsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilter">DataOciCertificatesManagementCertificateVersionsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetVersionNumber` <a name="resetVersionNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.resetVersionNumber"></a>

```typescript
public resetVersionNumber(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCertificatesManagementCertificateVersions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.isConstruct"></a>

```typescript
import { dataOciCertificatesManagementCertificateVersions } from 'rhizo-co-terraform-provider-oci'

dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.isTerraformElement"></a>

```typescript
import { dataOciCertificatesManagementCertificateVersions } from 'rhizo-co-terraform-provider-oci'

dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.isTerraformDataSource"></a>

```typescript
import { dataOciCertificatesManagementCertificateVersions } from 'rhizo-co-terraform-provider-oci'

dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.generateConfigForImport"></a>

```typescript
import { dataOciCertificatesManagementCertificateVersions } from 'rhizo-co-terraform-provider-oci'

dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCertificatesManagementCertificateVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCertificatesManagementCertificateVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCertificatesManagementCertificateVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCertificatesManagementCertificateVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.certificateVersionCollection">certificateVersionCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList">DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterList">DataOciCertificatesManagementCertificateVersionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.certificateIdInput">certificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilter">DataOciCertificatesManagementCertificateVersionsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.versionNumberInput">versionNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.versionNumber">versionNumber</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `certificateVersionCollection`<sup>Required</sup> <a name="certificateVersionCollection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.certificateVersionCollection"></a>

```typescript
public readonly certificateVersionCollection: DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList">DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.filter"></a>

```typescript
public readonly filter: DataOciCertificatesManagementCertificateVersionsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterList">DataOciCertificatesManagementCertificateVersionsFilterList</a>

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.certificateIdInput"></a>

```typescript
public readonly certificateIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCertificatesManagementCertificateVersionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilter">DataOciCertificatesManagementCertificateVersionsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `versionNumberInput`<sup>Optional</sup> <a name="versionNumberInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.versionNumberInput"></a>

```typescript
public readonly versionNumberInput: string;
```

- *Type:* string

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.versionNumber"></a>

```typescript
public readonly versionNumber: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCertificatesManagementCertificateVersionsCertificateVersionCollection <a name="DataOciCertificatesManagementCertificateVersionsCertificateVersionCollection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollection.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateVersionsCertificateVersionCollection: dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollection = { ... }
```


### DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItems <a name="DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItems.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItems: dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItems = { ... }
```


### DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatus <a name="DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatus" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatus"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatus.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatus: dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatus = { ... }
```


### DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNames <a name="DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNames" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNames.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNames: dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNames = { ... }
```


### DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidity <a name="DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidity.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidity: dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidity = { ... }
```


### DataOciCertificatesManagementCertificateVersionsConfig <a name="DataOciCertificatesManagementCertificateVersionsConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsConfig.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateVersionsConfig: dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsConfig.property.certificateId">certificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_versions#certificate_id DataOciCertificatesManagementCertificateVersions#certificate_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilter">DataOciCertificatesManagementCertificateVersionsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_versions#id DataOciCertificatesManagementCertificateVersions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsConfig.property.versionNumber">versionNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_versions#version_number DataOciCertificatesManagementCertificateVersions#version_number}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsConfig.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_versions#certificate_id DataOciCertificatesManagementCertificateVersions#certificate_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCertificatesManagementCertificateVersionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilter">DataOciCertificatesManagementCertificateVersionsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_versions#filter DataOciCertificatesManagementCertificateVersions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_versions#id DataOciCertificatesManagementCertificateVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `versionNumber`<sup>Optional</sup> <a name="versionNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsConfig.property.versionNumber"></a>

```typescript
public readonly versionNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_versions#version_number DataOciCertificatesManagementCertificateVersions#version_number}.

---

### DataOciCertificatesManagementCertificateVersionsFilter <a name="DataOciCertificatesManagementCertificateVersionsFilter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilter.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateVersionsFilter: dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_versions#name DataOciCertificatesManagementCertificateVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_versions#values DataOciCertificatesManagementCertificateVersions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_versions#regex DataOciCertificatesManagementCertificateVersions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_versions#name DataOciCertificatesManagementCertificateVersions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_versions#values DataOciCertificatesManagementCertificateVersions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_versions#regex DataOciCertificatesManagementCertificateVersions#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList <a name="DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference <a name="DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.property.issuerCaVersionNumber">issuerCaVersionNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.property.revocationStatus">revocationStatus</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList">DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.property.stages">stages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList">DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.property.timeOfDeletion">timeOfDeletion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.property.validity">validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList">DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.property.versionName">versionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.property.versionNumber">versionNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItems">DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `issuerCaVersionNumber`<sup>Required</sup> <a name="issuerCaVersionNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.property.issuerCaVersionNumber"></a>

```typescript
public readonly issuerCaVersionNumber: string;
```

- *Type:* string

---

##### `revocationStatus`<sup>Required</sup> <a name="revocationStatus" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.property.revocationStatus"></a>

```typescript
public readonly revocationStatus: DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList">DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList</a>

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `stages`<sup>Required</sup> <a name="stages" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.property.stages"></a>

```typescript
public readonly stages: string[];
```

- *Type:* string[]

---

##### `subjectAlternativeNames`<sup>Required</sup> <a name="subjectAlternativeNames" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.property.subjectAlternativeNames"></a>

```typescript
public readonly subjectAlternativeNames: DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList">DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeOfDeletion`<sup>Required</sup> <a name="timeOfDeletion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.property.timeOfDeletion"></a>

```typescript
public readonly timeOfDeletion: string;
```

- *Type:* string

---

##### `validity`<sup>Required</sup> <a name="validity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.property.validity"></a>

```typescript
public readonly validity: DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList">DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList</a>

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.property.versionNumber"></a>

```typescript
public readonly versionNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItems">DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItems</a>

---


### DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList <a name="DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList.get"></a>

```typescript
public get(index: number): DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference <a name="DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.property.revocationReason">revocationReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.property.timeOfRevocation">timeOfRevocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatus">DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `revocationReason`<sup>Required</sup> <a name="revocationReason" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.property.revocationReason"></a>

```typescript
public readonly revocationReason: string;
```

- *Type:* string

---

##### `timeOfRevocation`<sup>Required</sup> <a name="timeOfRevocation" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.property.timeOfRevocation"></a>

```typescript
public readonly timeOfRevocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatus;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatus">DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsRevocationStatus</a>

---


### DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList <a name="DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList.get"></a>

```typescript
public get(index: number): DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference <a name="DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNames">DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNames;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNames">DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsSubjectAlternativeNames</a>

---


### DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList <a name="DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList.get"></a>

```typescript
public get(index: number): DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference <a name="DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.property.timeOfValidityNotAfter">timeOfValidityNotAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.property.timeOfValidityNotBefore">timeOfValidityNotBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidity">DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeOfValidityNotAfter`<sup>Required</sup> <a name="timeOfValidityNotAfter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.property.timeOfValidityNotAfter"></a>

```typescript
public readonly timeOfValidityNotAfter: string;
```

- *Type:* string

---

##### `timeOfValidityNotBefore`<sup>Required</sup> <a name="timeOfValidityNotBefore" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.property.timeOfValidityNotBefore"></a>

```typescript
public readonly timeOfValidityNotBefore: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidity;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidity">DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsValidity</a>

---


### DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList <a name="DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList.get"></a>

```typescript
public get(index: number): DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference <a name="DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList">DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollection">DataOciCertificatesManagementCertificateVersionsCertificateVersionCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList">DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCertificatesManagementCertificateVersionsCertificateVersionCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsCertificateVersionCollection">DataOciCertificatesManagementCertificateVersionsCertificateVersionCollection</a>

---


### DataOciCertificatesManagementCertificateVersionsFilterList <a name="DataOciCertificatesManagementCertificateVersionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterList.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterList.get"></a>

```typescript
public get(index: number): DataOciCertificatesManagementCertificateVersionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilter">DataOciCertificatesManagementCertificateVersionsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCertificatesManagementCertificateVersionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilter">DataOciCertificatesManagementCertificateVersionsFilter</a>[]

---


### DataOciCertificatesManagementCertificateVersionsFilterOutputReference <a name="DataOciCertificatesManagementCertificateVersionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilter">DataOciCertificatesManagementCertificateVersionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCertificatesManagementCertificateVersionsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateVersions.DataOciCertificatesManagementCertificateVersionsFilter">DataOciCertificatesManagementCertificateVersionsFilter</a>

---



