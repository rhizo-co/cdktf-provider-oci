# `dataOciDatabaseDatabaseSoftwareImages` Submodule <a name="`dataOciDatabaseDatabaseSoftwareImages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDatabaseSoftwareImages <a name="DataOciDatabaseDatabaseSoftwareImages" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images oci_database_database_software_images}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer"></a>

```typescript
import { dataOciDatabaseDatabaseSoftwareImages } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages(scope: Construct, id: string, config: DataOciDatabaseDatabaseSoftwareImagesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig">DataOciDatabaseDatabaseSoftwareImagesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig">DataOciDatabaseDatabaseSoftwareImagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetImageShapeFamily">resetImageShapeFamily</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetImageType">resetImageType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetIsUpgradeSupported">resetIsUpgradeSupported</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseDatabaseSoftwareImagesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter">DataOciDatabaseDatabaseSoftwareImagesFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImageShapeFamily` <a name="resetImageShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetImageShapeFamily"></a>

```typescript
public resetImageShapeFamily(): void
```

##### `resetImageType` <a name="resetImageType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetImageType"></a>

```typescript
public resetImageType(): void
```

##### `resetIsUpgradeSupported` <a name="resetIsUpgradeSupported" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetIsUpgradeSupported"></a>

```typescript
public resetIsUpgradeSupported(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseDatabaseSoftwareImages resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isConstruct"></a>

```typescript
import { dataOciDatabaseDatabaseSoftwareImages } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isTerraformElement"></a>

```typescript
import { dataOciDatabaseDatabaseSoftwareImages } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseDatabaseSoftwareImages } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseDatabaseSoftwareImages } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseDatabaseSoftwareImages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseDatabaseSoftwareImages to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseDatabaseSoftwareImages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDatabaseSoftwareImages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.databaseSoftwareImages">databaseSoftwareImages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList">DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList">DataOciDatabaseDatabaseSoftwareImagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter">DataOciDatabaseDatabaseSoftwareImagesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageShapeFamilyInput">imageShapeFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageTypeInput">imageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.isUpgradeSupportedInput">isUpgradeSupportedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageShapeFamily">imageShapeFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageType">imageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.isUpgradeSupported">isUpgradeSupported</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `databaseSoftwareImages`<sup>Required</sup> <a name="databaseSoftwareImages" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.databaseSoftwareImages"></a>

```typescript
public readonly databaseSoftwareImages: DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList">DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseDatabaseSoftwareImagesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList">DataOciDatabaseDatabaseSoftwareImagesFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseDatabaseSoftwareImagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter">DataOciDatabaseDatabaseSoftwareImagesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageShapeFamilyInput`<sup>Optional</sup> <a name="imageShapeFamilyInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageShapeFamilyInput"></a>

```typescript
public readonly imageShapeFamilyInput: string;
```

- *Type:* string

---

##### `imageTypeInput`<sup>Optional</sup> <a name="imageTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageTypeInput"></a>

```typescript
public readonly imageTypeInput: string;
```

- *Type:* string

---

##### `isUpgradeSupportedInput`<sup>Optional</sup> <a name="isUpgradeSupportedInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.isUpgradeSupportedInput"></a>

```typescript
public readonly isUpgradeSupportedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageShapeFamily`<sup>Required</sup> <a name="imageShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageShapeFamily"></a>

```typescript
public readonly imageShapeFamily: string;
```

- *Type:* string

---

##### `imageType`<sup>Required</sup> <a name="imageType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageType"></a>

```typescript
public readonly imageType: string;
```

- *Type:* string

---

##### `isUpgradeSupported`<sup>Required</sup> <a name="isUpgradeSupported" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.isUpgradeSupported"></a>

```typescript
public readonly isUpgradeSupported: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDatabaseSoftwareImagesConfig <a name="DataOciDatabaseDatabaseSoftwareImagesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.Initializer"></a>

```typescript
import { dataOciDatabaseDatabaseSoftwareImages } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseDatabaseSoftwareImagesConfig: dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#compartment_id DataOciDatabaseDatabaseSoftwareImages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#display_name DataOciDatabaseDatabaseSoftwareImages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter">DataOciDatabaseDatabaseSoftwareImagesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#id DataOciDatabaseDatabaseSoftwareImages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.imageShapeFamily">imageShapeFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#image_shape_family DataOciDatabaseDatabaseSoftwareImages#image_shape_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.imageType">imageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#image_type DataOciDatabaseDatabaseSoftwareImages#image_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.isUpgradeSupported">isUpgradeSupported</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#is_upgrade_supported DataOciDatabaseDatabaseSoftwareImages#is_upgrade_supported}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#state DataOciDatabaseDatabaseSoftwareImages#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#compartment_id DataOciDatabaseDatabaseSoftwareImages#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#display_name DataOciDatabaseDatabaseSoftwareImages#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseDatabaseSoftwareImagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter">DataOciDatabaseDatabaseSoftwareImagesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#filter DataOciDatabaseDatabaseSoftwareImages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#id DataOciDatabaseDatabaseSoftwareImages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageShapeFamily`<sup>Optional</sup> <a name="imageShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.imageShapeFamily"></a>

```typescript
public readonly imageShapeFamily: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#image_shape_family DataOciDatabaseDatabaseSoftwareImages#image_shape_family}.

---

##### `imageType`<sup>Optional</sup> <a name="imageType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.imageType"></a>

```typescript
public readonly imageType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#image_type DataOciDatabaseDatabaseSoftwareImages#image_type}.

---

##### `isUpgradeSupported`<sup>Optional</sup> <a name="isUpgradeSupported" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.isUpgradeSupported"></a>

```typescript
public readonly isUpgradeSupported: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#is_upgrade_supported DataOciDatabaseDatabaseSoftwareImages#is_upgrade_supported}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#state DataOciDatabaseDatabaseSoftwareImages#state}.

---

### DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages <a name="DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages.Initializer"></a>

```typescript
import { dataOciDatabaseDatabaseSoftwareImages } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages: dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages = { ... }
```


### DataOciDatabaseDatabaseSoftwareImagesFilter <a name="DataOciDatabaseDatabaseSoftwareImagesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.Initializer"></a>

```typescript
import { dataOciDatabaseDatabaseSoftwareImages } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseDatabaseSoftwareImagesFilter: dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#name DataOciDatabaseDatabaseSoftwareImages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#values DataOciDatabaseDatabaseSoftwareImages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#regex DataOciDatabaseDatabaseSoftwareImages#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#name DataOciDatabaseDatabaseSoftwareImages#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#values DataOciDatabaseDatabaseSoftwareImages#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#regex DataOciDatabaseDatabaseSoftwareImages#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList <a name="DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer"></a>

```typescript
import { dataOciDatabaseDatabaseSoftwareImages } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.get"></a>

```typescript
public get(index: number): DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference <a name="DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseDatabaseSoftwareImages } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.databaseSoftwareImageIncludedPatches">databaseSoftwareImageIncludedPatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.databaseSoftwareImageOneOffPatches">databaseSoftwareImageOneOffPatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.databaseVersion">databaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.imageShapeFamily">imageShapeFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.imageType">imageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.includedPatchesSummary">includedPatchesSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.isUpgradeSupported">isUpgradeSupported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.lsInventory">lsInventory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.patchSet">patchSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.sourceDbHomeId">sourceDbHomeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages">DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `databaseSoftwareImageIncludedPatches`<sup>Required</sup> <a name="databaseSoftwareImageIncludedPatches" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.databaseSoftwareImageIncludedPatches"></a>

```typescript
public readonly databaseSoftwareImageIncludedPatches: string[];
```

- *Type:* string[]

---

##### `databaseSoftwareImageOneOffPatches`<sup>Required</sup> <a name="databaseSoftwareImageOneOffPatches" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.databaseSoftwareImageOneOffPatches"></a>

```typescript
public readonly databaseSoftwareImageOneOffPatches: string[];
```

- *Type:* string[]

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.databaseVersion"></a>

```typescript
public readonly databaseVersion: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageShapeFamily`<sup>Required</sup> <a name="imageShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.imageShapeFamily"></a>

```typescript
public readonly imageShapeFamily: string;
```

- *Type:* string

---

##### `imageType`<sup>Required</sup> <a name="imageType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.imageType"></a>

```typescript
public readonly imageType: string;
```

- *Type:* string

---

##### `includedPatchesSummary`<sup>Required</sup> <a name="includedPatchesSummary" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.includedPatchesSummary"></a>

```typescript
public readonly includedPatchesSummary: string;
```

- *Type:* string

---

##### `isUpgradeSupported`<sup>Required</sup> <a name="isUpgradeSupported" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.isUpgradeSupported"></a>

```typescript
public readonly isUpgradeSupported: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `lsInventory`<sup>Required</sup> <a name="lsInventory" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.lsInventory"></a>

```typescript
public readonly lsInventory: string;
```

- *Type:* string

---

##### `patchSet`<sup>Required</sup> <a name="patchSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.patchSet"></a>

```typescript
public readonly patchSet: string;
```

- *Type:* string

---

##### `sourceDbHomeId`<sup>Required</sup> <a name="sourceDbHomeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.sourceDbHomeId"></a>

```typescript
public readonly sourceDbHomeId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages">DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages</a>

---


### DataOciDatabaseDatabaseSoftwareImagesFilterList <a name="DataOciDatabaseDatabaseSoftwareImagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseDatabaseSoftwareImages } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter">DataOciDatabaseDatabaseSoftwareImagesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseDatabaseSoftwareImagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter">DataOciDatabaseDatabaseSoftwareImagesFilter</a>[]

---


### DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference <a name="DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseDatabaseSoftwareImages } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter">DataOciDatabaseDatabaseSoftwareImagesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseDatabaseSoftwareImagesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter">DataOciDatabaseDatabaseSoftwareImagesFilter</a>

---



