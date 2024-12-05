# `dataOciArtifactsContainerImages` Submodule <a name="`dataOciArtifactsContainerImages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciArtifactsContainerImages <a name="DataOciArtifactsContainerImages" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images oci_artifacts_container_images}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer"></a>

```typescript
import { dataOciArtifactsContainerImages } from 'rhizo-co-terraform-provider-oci'

new dataOciArtifactsContainerImages.DataOciArtifactsContainerImages(scope: Construct, id: string, config: DataOciArtifactsContainerImagesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig">DataOciArtifactsContainerImagesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig">DataOciArtifactsContainerImagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetImageId">resetImageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetIsVersioned">resetIsVersioned</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetRepositoryId">resetRepositoryId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetRepositoryName">resetRepositoryName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciArtifactsContainerImagesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter">DataOciArtifactsContainerImagesFilter</a>[]

---

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImageId` <a name="resetImageId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetImageId"></a>

```typescript
public resetImageId(): void
```

##### `resetIsVersioned` <a name="resetIsVersioned" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetIsVersioned"></a>

```typescript
public resetIsVersioned(): void
```

##### `resetRepositoryId` <a name="resetRepositoryId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetRepositoryId"></a>

```typescript
public resetRepositoryId(): void
```

##### `resetRepositoryName` <a name="resetRepositoryName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetRepositoryName"></a>

```typescript
public resetRepositoryName(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetState"></a>

```typescript
public resetState(): void
```

##### `resetVersion` <a name="resetVersion" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.resetVersion"></a>

```typescript
public resetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciArtifactsContainerImages resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.isConstruct"></a>

```typescript
import { dataOciArtifactsContainerImages } from 'rhizo-co-terraform-provider-oci'

dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.isTerraformElement"></a>

```typescript
import { dataOciArtifactsContainerImages } from 'rhizo-co-terraform-provider-oci'

dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.isTerraformDataSource"></a>

```typescript
import { dataOciArtifactsContainerImages } from 'rhizo-co-terraform-provider-oci'

dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.generateConfigForImport"></a>

```typescript
import { dataOciArtifactsContainerImages } from 'rhizo-co-terraform-provider-oci'

dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciArtifactsContainerImages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciArtifactsContainerImages to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciArtifactsContainerImages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciArtifactsContainerImages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.containerImageCollection">containerImageCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList">DataOciArtifactsContainerImagesContainerImageCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList">DataOciArtifactsContainerImagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter">DataOciArtifactsContainerImagesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.imageIdInput">imageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.isVersionedInput">isVersionedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.repositoryIdInput">repositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.repositoryNameInput">repositoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.isVersioned">isVersioned</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.repositoryId">repositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.repositoryName">repositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `containerImageCollection`<sup>Required</sup> <a name="containerImageCollection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.containerImageCollection"></a>

```typescript
public readonly containerImageCollection: DataOciArtifactsContainerImagesContainerImageCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList">DataOciArtifactsContainerImagesContainerImageCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.filter"></a>

```typescript
public readonly filter: DataOciArtifactsContainerImagesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList">DataOciArtifactsContainerImagesFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciArtifactsContainerImagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter">DataOciArtifactsContainerImagesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.imageIdInput"></a>

```typescript
public readonly imageIdInput: string;
```

- *Type:* string

---

##### `isVersionedInput`<sup>Optional</sup> <a name="isVersionedInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.isVersionedInput"></a>

```typescript
public readonly isVersionedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.repositoryIdInput"></a>

```typescript
public readonly repositoryIdInput: string;
```

- *Type:* string

---

##### `repositoryNameInput`<sup>Optional</sup> <a name="repositoryNameInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.repositoryNameInput"></a>

```typescript
public readonly repositoryNameInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `isVersioned`<sup>Required</sup> <a name="isVersioned" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.isVersioned"></a>

```typescript
public readonly isVersioned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImages.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciArtifactsContainerImagesConfig <a name="DataOciArtifactsContainerImagesConfig" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.Initializer"></a>

```typescript
import { dataOciArtifactsContainerImages } from 'rhizo-co-terraform-provider-oci'

const dataOciArtifactsContainerImagesConfig: dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#compartment_id DataOciArtifactsContainerImages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#compartment_id_in_subtree DataOciArtifactsContainerImages#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#display_name DataOciArtifactsContainerImages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter">DataOciArtifactsContainerImagesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#id DataOciArtifactsContainerImages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.imageId">imageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#image_id DataOciArtifactsContainerImages#image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.isVersioned">isVersioned</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#is_versioned DataOciArtifactsContainerImages#is_versioned}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.repositoryId">repositoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#repository_id DataOciArtifactsContainerImages#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.repositoryName">repositoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#repository_name DataOciArtifactsContainerImages#repository_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#state DataOciArtifactsContainerImages#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#version DataOciArtifactsContainerImages#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#compartment_id DataOciArtifactsContainerImages#compartment_id}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#compartment_id_in_subtree DataOciArtifactsContainerImages#compartment_id_in_subtree}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#display_name DataOciArtifactsContainerImages#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciArtifactsContainerImagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter">DataOciArtifactsContainerImagesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#filter DataOciArtifactsContainerImages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#id DataOciArtifactsContainerImages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#image_id DataOciArtifactsContainerImages#image_id}.

---

##### `isVersioned`<sup>Optional</sup> <a name="isVersioned" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.isVersioned"></a>

```typescript
public readonly isVersioned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#is_versioned DataOciArtifactsContainerImages#is_versioned}.

---

##### `repositoryId`<sup>Optional</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#repository_id DataOciArtifactsContainerImages#repository_id}.

---

##### `repositoryName`<sup>Optional</sup> <a name="repositoryName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#repository_name DataOciArtifactsContainerImages#repository_name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#state DataOciArtifactsContainerImages#state}.

---

##### `version`<sup>Optional</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#version DataOciArtifactsContainerImages#version}.

---

### DataOciArtifactsContainerImagesContainerImageCollection <a name="DataOciArtifactsContainerImagesContainerImageCollection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollection.Initializer"></a>

```typescript
import { dataOciArtifactsContainerImages } from 'rhizo-co-terraform-provider-oci'

const dataOciArtifactsContainerImagesContainerImageCollection: dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollection = { ... }
```


### DataOciArtifactsContainerImagesContainerImageCollectionItems <a name="DataOciArtifactsContainerImagesContainerImageCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItems.Initializer"></a>

```typescript
import { dataOciArtifactsContainerImages } from 'rhizo-co-terraform-provider-oci'

const dataOciArtifactsContainerImagesContainerImageCollectionItems: dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItems = { ... }
```


### DataOciArtifactsContainerImagesContainerImageCollectionItemsLayers <a name="DataOciArtifactsContainerImagesContainerImageCollectionItemsLayers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayers.Initializer"></a>

```typescript
import { dataOciArtifactsContainerImages } from 'rhizo-co-terraform-provider-oci'

const dataOciArtifactsContainerImagesContainerImageCollectionItemsLayers: dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayers = { ... }
```


### DataOciArtifactsContainerImagesContainerImageCollectionItemsVersions <a name="DataOciArtifactsContainerImagesContainerImageCollectionItemsVersions" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersions.Initializer"></a>

```typescript
import { dataOciArtifactsContainerImages } from 'rhizo-co-terraform-provider-oci'

const dataOciArtifactsContainerImagesContainerImageCollectionItemsVersions: dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersions = { ... }
```


### DataOciArtifactsContainerImagesFilter <a name="DataOciArtifactsContainerImagesFilter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter.Initializer"></a>

```typescript
import { dataOciArtifactsContainerImages } from 'rhizo-co-terraform-provider-oci'

const dataOciArtifactsContainerImagesFilter: dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#name DataOciArtifactsContainerImages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#values DataOciArtifactsContainerImages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#regex DataOciArtifactsContainerImages#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#name DataOciArtifactsContainerImages#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#values DataOciArtifactsContainerImages#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_images#regex DataOciArtifactsContainerImages#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList <a name="DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.Initializer"></a>

```typescript
import { dataOciArtifactsContainerImages } from 'rhizo-co-terraform-provider-oci'

new dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.get"></a>

```typescript
public get(index: number): DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference <a name="DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.Initializer"></a>

```typescript
import { dataOciArtifactsContainerImages } from 'rhizo-co-terraform-provider-oci'

new dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.property.digest">digest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.property.sizeInBytes">sizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayers">DataOciArtifactsContainerImagesContainerImageCollectionItemsLayers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `digest`<sup>Required</sup> <a name="digest" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.property.digest"></a>

```typescript
public readonly digest: string;
```

- *Type:* string

---

##### `sizeInBytes`<sup>Required</sup> <a name="sizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.property.sizeInBytes"></a>

```typescript
public readonly sizeInBytes: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciArtifactsContainerImagesContainerImageCollectionItemsLayers;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayers">DataOciArtifactsContainerImagesContainerImageCollectionItemsLayers</a>

---


### DataOciArtifactsContainerImagesContainerImageCollectionItemsList <a name="DataOciArtifactsContainerImagesContainerImageCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.Initializer"></a>

```typescript
import { dataOciArtifactsContainerImages } from 'rhizo-co-terraform-provider-oci'

new dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference <a name="DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciArtifactsContainerImages } from 'rhizo-co-terraform-provider-oci'

new dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.digest">digest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.layers">layers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList">DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.layersSizeInBytes">layersSizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.manifestSizeInBytes">manifestSizeInBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.pullCount">pullCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.repositoryId">repositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.repositoryName">repositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.timeLastPulled">timeLastPulled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.versions">versions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList">DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItems">DataOciArtifactsContainerImagesContainerImageCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `digest`<sup>Required</sup> <a name="digest" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.digest"></a>

```typescript
public readonly digest: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `layers`<sup>Required</sup> <a name="layers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.layers"></a>

```typescript
public readonly layers: DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList">DataOciArtifactsContainerImagesContainerImageCollectionItemsLayersList</a>

---

##### `layersSizeInBytes`<sup>Required</sup> <a name="layersSizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.layersSizeInBytes"></a>

```typescript
public readonly layersSizeInBytes: string;
```

- *Type:* string

---

##### `manifestSizeInBytes`<sup>Required</sup> <a name="manifestSizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.manifestSizeInBytes"></a>

```typescript
public readonly manifestSizeInBytes: number;
```

- *Type:* number

---

##### `pullCount`<sup>Required</sup> <a name="pullCount" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.pullCount"></a>

```typescript
public readonly pullCount: string;
```

- *Type:* string

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeLastPulled`<sup>Required</sup> <a name="timeLastPulled" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.timeLastPulled"></a>

```typescript
public readonly timeLastPulled: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `versions`<sup>Required</sup> <a name="versions" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.versions"></a>

```typescript
public readonly versions: DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList">DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciArtifactsContainerImagesContainerImageCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItems">DataOciArtifactsContainerImagesContainerImageCollectionItems</a>

---


### DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList <a name="DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.Initializer"></a>

```typescript
import { dataOciArtifactsContainerImages } from 'rhizo-co-terraform-provider-oci'

new dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.get"></a>

```typescript
public get(index: number): DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference <a name="DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.Initializer"></a>

```typescript
import { dataOciArtifactsContainerImages } from 'rhizo-co-terraform-provider-oci'

new dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersions">DataOciArtifactsContainerImagesContainerImageCollectionItemsVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciArtifactsContainerImagesContainerImageCollectionItemsVersions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsVersions">DataOciArtifactsContainerImagesContainerImageCollectionItemsVersions</a>

---


### DataOciArtifactsContainerImagesContainerImageCollectionList <a name="DataOciArtifactsContainerImagesContainerImageCollectionList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.Initializer"></a>

```typescript
import { dataOciArtifactsContainerImages } from 'rhizo-co-terraform-provider-oci'

new dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.get"></a>

```typescript
public get(index: number): DataOciArtifactsContainerImagesContainerImageCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciArtifactsContainerImagesContainerImageCollectionOutputReference <a name="DataOciArtifactsContainerImagesContainerImageCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciArtifactsContainerImages } from 'rhizo-co-terraform-provider-oci'

new dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList">DataOciArtifactsContainerImagesContainerImageCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.property.remainingItemsCount">remainingItemsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollection">DataOciArtifactsContainerImagesContainerImageCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciArtifactsContainerImagesContainerImageCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionItemsList">DataOciArtifactsContainerImagesContainerImageCollectionItemsList</a>

---

##### `remainingItemsCount`<sup>Required</sup> <a name="remainingItemsCount" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.property.remainingItemsCount"></a>

```typescript
public readonly remainingItemsCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciArtifactsContainerImagesContainerImageCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesContainerImageCollection">DataOciArtifactsContainerImagesContainerImageCollection</a>

---


### DataOciArtifactsContainerImagesFilterList <a name="DataOciArtifactsContainerImagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.Initializer"></a>

```typescript
import { dataOciArtifactsContainerImages } from 'rhizo-co-terraform-provider-oci'

new dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.get"></a>

```typescript
public get(index: number): DataOciArtifactsContainerImagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter">DataOciArtifactsContainerImagesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciArtifactsContainerImagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter">DataOciArtifactsContainerImagesFilter</a>[]

---


### DataOciArtifactsContainerImagesFilterOutputReference <a name="DataOciArtifactsContainerImagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciArtifactsContainerImages } from 'rhizo-co-terraform-provider-oci'

new dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter">DataOciArtifactsContainerImagesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciArtifactsContainerImagesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImages.DataOciArtifactsContainerImagesFilter">DataOciArtifactsContainerImagesFilter</a>

---



