# `dataOciOcvpSupportedVmwareSoftwareVersions` Submodule <a name="`dataOciOcvpSupportedVmwareSoftwareVersions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOcvpSupportedVmwareSoftwareVersions <a name="DataOciOcvpSupportedVmwareSoftwareVersions" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions oci_ocvp_supported_vmware_software_versions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer"></a>

```typescript
import { dataOciOcvpSupportedVmwareSoftwareVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions(scope: Construct, id: string, config: DataOciOcvpSupportedVmwareSoftwareVersionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig">DataOciOcvpSupportedVmwareSoftwareVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig">DataOciOcvpSupportedVmwareSoftwareVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetHostShapeName">resetHostShapeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetVersion">resetVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetVersionToUpgrade">resetVersionToUpgrade</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOcvpSupportedVmwareSoftwareVersionsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter">DataOciOcvpSupportedVmwareSoftwareVersionsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetHostShapeName` <a name="resetHostShapeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetHostShapeName"></a>

```typescript
public resetHostShapeName(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetVersion` <a name="resetVersion" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetVersion"></a>

```typescript
public resetVersion(): void
```

##### `resetVersionToUpgrade` <a name="resetVersionToUpgrade" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetVersionToUpgrade"></a>

```typescript
public resetVersionToUpgrade(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOcvpSupportedVmwareSoftwareVersions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isConstruct"></a>

```typescript
import { dataOciOcvpSupportedVmwareSoftwareVersions } from 'rhizo-co-terraform-provider-oci'

dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isTerraformElement"></a>

```typescript
import { dataOciOcvpSupportedVmwareSoftwareVersions } from 'rhizo-co-terraform-provider-oci'

dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isTerraformDataSource"></a>

```typescript
import { dataOciOcvpSupportedVmwareSoftwareVersions } from 'rhizo-co-terraform-provider-oci'

dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.generateConfigForImport"></a>

```typescript
import { dataOciOcvpSupportedVmwareSoftwareVersions } from 'rhizo-co-terraform-provider-oci'

dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOcvpSupportedVmwareSoftwareVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOcvpSupportedVmwareSoftwareVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOcvpSupportedVmwareSoftwareVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOcvpSupportedVmwareSoftwareVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList">DataOciOcvpSupportedVmwareSoftwareVersionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList">DataOciOcvpSupportedVmwareSoftwareVersionsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter">DataOciOcvpSupportedVmwareSoftwareVersionsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.hostShapeNameInput">hostShapeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.versionToUpgradeInput">versionToUpgradeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.hostShapeName">hostShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.versionToUpgrade">versionToUpgrade</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.filter"></a>

```typescript
public readonly filter: DataOciOcvpSupportedVmwareSoftwareVersionsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList">DataOciOcvpSupportedVmwareSoftwareVersionsFilterList</a>

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.items"></a>

```typescript
public readonly items: DataOciOcvpSupportedVmwareSoftwareVersionsItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList">DataOciOcvpSupportedVmwareSoftwareVersionsItemsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOcvpSupportedVmwareSoftwareVersionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter">DataOciOcvpSupportedVmwareSoftwareVersionsFilter</a>[]

---

##### `hostShapeNameInput`<sup>Optional</sup> <a name="hostShapeNameInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.hostShapeNameInput"></a>

```typescript
public readonly hostShapeNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `versionToUpgradeInput`<sup>Optional</sup> <a name="versionToUpgradeInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.versionToUpgradeInput"></a>

```typescript
public readonly versionToUpgradeInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `hostShapeName`<sup>Required</sup> <a name="hostShapeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.hostShapeName"></a>

```typescript
public readonly hostShapeName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `versionToUpgrade`<sup>Required</sup> <a name="versionToUpgrade" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.versionToUpgrade"></a>

```typescript
public readonly versionToUpgrade: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOcvpSupportedVmwareSoftwareVersionsConfig <a name="DataOciOcvpSupportedVmwareSoftwareVersionsConfig" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.Initializer"></a>

```typescript
import { dataOciOcvpSupportedVmwareSoftwareVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciOcvpSupportedVmwareSoftwareVersionsConfig: dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#compartment_id DataOciOcvpSupportedVmwareSoftwareVersions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter">DataOciOcvpSupportedVmwareSoftwareVersionsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.hostShapeName">hostShapeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#host_shape_name DataOciOcvpSupportedVmwareSoftwareVersions#host_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#id DataOciOcvpSupportedVmwareSoftwareVersions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#version DataOciOcvpSupportedVmwareSoftwareVersions#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.versionToUpgrade">versionToUpgrade</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#version_to_upgrade DataOciOcvpSupportedVmwareSoftwareVersions#version_to_upgrade}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#compartment_id DataOciOcvpSupportedVmwareSoftwareVersions#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOcvpSupportedVmwareSoftwareVersionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter">DataOciOcvpSupportedVmwareSoftwareVersionsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#filter DataOciOcvpSupportedVmwareSoftwareVersions#filter}

---

##### `hostShapeName`<sup>Optional</sup> <a name="hostShapeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.hostShapeName"></a>

```typescript
public readonly hostShapeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#host_shape_name DataOciOcvpSupportedVmwareSoftwareVersions#host_shape_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#id DataOciOcvpSupportedVmwareSoftwareVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version`<sup>Optional</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#version DataOciOcvpSupportedVmwareSoftwareVersions#version}.

---

##### `versionToUpgrade`<sup>Optional</sup> <a name="versionToUpgrade" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.versionToUpgrade"></a>

```typescript
public readonly versionToUpgrade: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#version_to_upgrade DataOciOcvpSupportedVmwareSoftwareVersions#version_to_upgrade}.

---

### DataOciOcvpSupportedVmwareSoftwareVersionsFilter <a name="DataOciOcvpSupportedVmwareSoftwareVersionsFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter.Initializer"></a>

```typescript
import { dataOciOcvpSupportedVmwareSoftwareVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciOcvpSupportedVmwareSoftwareVersionsFilter: dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#name DataOciOcvpSupportedVmwareSoftwareVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#values DataOciOcvpSupportedVmwareSoftwareVersions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#regex DataOciOcvpSupportedVmwareSoftwareVersions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#name DataOciOcvpSupportedVmwareSoftwareVersions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#values DataOciOcvpSupportedVmwareSoftwareVersions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#regex DataOciOcvpSupportedVmwareSoftwareVersions#regex}.

---

### DataOciOcvpSupportedVmwareSoftwareVersionsItems <a name="DataOciOcvpSupportedVmwareSoftwareVersionsItems" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItems.Initializer"></a>

```typescript
import { dataOciOcvpSupportedVmwareSoftwareVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciOcvpSupportedVmwareSoftwareVersionsItems: dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItems = { ... }
```


### DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions <a name="DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions.Initializer"></a>

```typescript
import { dataOciOcvpSupportedVmwareSoftwareVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions: dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOcvpSupportedVmwareSoftwareVersionsFilterList <a name="DataOciOcvpSupportedVmwareSoftwareVersionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.Initializer"></a>

```typescript
import { dataOciOcvpSupportedVmwareSoftwareVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.get"></a>

```typescript
public get(index: number): DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter">DataOciOcvpSupportedVmwareSoftwareVersionsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOcvpSupportedVmwareSoftwareVersionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter">DataOciOcvpSupportedVmwareSoftwareVersionsFilter</a>[]

---


### DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference <a name="DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOcvpSupportedVmwareSoftwareVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter">DataOciOcvpSupportedVmwareSoftwareVersionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOcvpSupportedVmwareSoftwareVersionsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter">DataOciOcvpSupportedVmwareSoftwareVersionsFilter</a>

---


### DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList <a name="DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.Initializer"></a>

```typescript
import { dataOciOcvpSupportedVmwareSoftwareVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.get"></a>

```typescript
public get(index: number): DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference <a name="DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer"></a>

```typescript
import { dataOciOcvpSupportedVmwareSoftwareVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.supportedHostShapeNames">supportedHostShapeNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions">DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `supportedHostShapeNames`<sup>Required</sup> <a name="supportedHostShapeNames" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.supportedHostShapeNames"></a>

```typescript
public readonly supportedHostShapeNames: string[];
```

- *Type:* string[]

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions">DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions</a>

---


### DataOciOcvpSupportedVmwareSoftwareVersionsItemsList <a name="DataOciOcvpSupportedVmwareSoftwareVersionsItemsList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.Initializer"></a>

```typescript
import { dataOciOcvpSupportedVmwareSoftwareVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.get"></a>

```typescript
public get(index: number): DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference <a name="DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOcvpSupportedVmwareSoftwareVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.esxiSoftwareVersions">esxiSoftwareVersions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList">DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItems">DataOciOcvpSupportedVmwareSoftwareVersionsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `esxiSoftwareVersions`<sup>Required</sup> <a name="esxiSoftwareVersions" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.esxiSoftwareVersions"></a>

```typescript
public readonly esxiSoftwareVersions: DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList">DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOcvpSupportedVmwareSoftwareVersionsItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItems">DataOciOcvpSupportedVmwareSoftwareVersionsItems</a>

---



