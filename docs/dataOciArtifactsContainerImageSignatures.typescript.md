# `dataOciArtifactsContainerImageSignatures` Submodule <a name="`dataOciArtifactsContainerImageSignatures` Submodule" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciArtifactsContainerImageSignatures <a name="DataOciArtifactsContainerImageSignatures" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures oci_artifacts_container_image_signatures}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.Initializer"></a>

```typescript
import { dataOciArtifactsContainerImageSignatures } from 'rhizo-co-terraform-provider-oci'

new dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures(scope: Construct, id: string, config: DataOciArtifactsContainerImageSignaturesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig">DataOciArtifactsContainerImageSignaturesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig">DataOciArtifactsContainerImageSignaturesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetImageDigest">resetImageDigest</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetImageId">resetImageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetKmsKeyVersionId">resetKmsKeyVersionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetRepositoryId">resetRepositoryId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetRepositoryName">resetRepositoryName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetSigningAlgorithm">resetSigningAlgorithm</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciArtifactsContainerImageSignaturesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilter">DataOciArtifactsContainerImageSignaturesFilter</a>[]

---

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImageDigest` <a name="resetImageDigest" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetImageDigest"></a>

```typescript
public resetImageDigest(): void
```

##### `resetImageId` <a name="resetImageId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetImageId"></a>

```typescript
public resetImageId(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetKmsKeyVersionId` <a name="resetKmsKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetKmsKeyVersionId"></a>

```typescript
public resetKmsKeyVersionId(): void
```

##### `resetRepositoryId` <a name="resetRepositoryId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetRepositoryId"></a>

```typescript
public resetRepositoryId(): void
```

##### `resetRepositoryName` <a name="resetRepositoryName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetRepositoryName"></a>

```typescript
public resetRepositoryName(): void
```

##### `resetSigningAlgorithm` <a name="resetSigningAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.resetSigningAlgorithm"></a>

```typescript
public resetSigningAlgorithm(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciArtifactsContainerImageSignatures resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.isConstruct"></a>

```typescript
import { dataOciArtifactsContainerImageSignatures } from 'rhizo-co-terraform-provider-oci'

dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.isTerraformElement"></a>

```typescript
import { dataOciArtifactsContainerImageSignatures } from 'rhizo-co-terraform-provider-oci'

dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.isTerraformDataSource"></a>

```typescript
import { dataOciArtifactsContainerImageSignatures } from 'rhizo-co-terraform-provider-oci'

dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.generateConfigForImport"></a>

```typescript
import { dataOciArtifactsContainerImageSignatures } from 'rhizo-co-terraform-provider-oci'

dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciArtifactsContainerImageSignatures resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciArtifactsContainerImageSignatures to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciArtifactsContainerImageSignatures that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciArtifactsContainerImageSignatures to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.containerImageSignatureCollection">containerImageSignatureCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList">DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList">DataOciArtifactsContainerImageSignaturesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilter">DataOciArtifactsContainerImageSignaturesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.imageDigestInput">imageDigestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.imageIdInput">imageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.kmsKeyVersionIdInput">kmsKeyVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.repositoryIdInput">repositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.repositoryNameInput">repositoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.signingAlgorithmInput">signingAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.imageDigest">imageDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.repositoryId">repositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.repositoryName">repositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.signingAlgorithm">signingAlgorithm</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `containerImageSignatureCollection`<sup>Required</sup> <a name="containerImageSignatureCollection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.containerImageSignatureCollection"></a>

```typescript
public readonly containerImageSignatureCollection: DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList">DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.filter"></a>

```typescript
public readonly filter: DataOciArtifactsContainerImageSignaturesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList">DataOciArtifactsContainerImageSignaturesFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciArtifactsContainerImageSignaturesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilter">DataOciArtifactsContainerImageSignaturesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageDigestInput`<sup>Optional</sup> <a name="imageDigestInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.imageDigestInput"></a>

```typescript
public readonly imageDigestInput: string;
```

- *Type:* string

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.imageIdInput"></a>

```typescript
public readonly imageIdInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `kmsKeyVersionIdInput`<sup>Optional</sup> <a name="kmsKeyVersionIdInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.kmsKeyVersionIdInput"></a>

```typescript
public readonly kmsKeyVersionIdInput: string;
```

- *Type:* string

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.repositoryIdInput"></a>

```typescript
public readonly repositoryIdInput: string;
```

- *Type:* string

---

##### `repositoryNameInput`<sup>Optional</sup> <a name="repositoryNameInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.repositoryNameInput"></a>

```typescript
public readonly repositoryNameInput: string;
```

- *Type:* string

---

##### `signingAlgorithmInput`<sup>Optional</sup> <a name="signingAlgorithmInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.signingAlgorithmInput"></a>

```typescript
public readonly signingAlgorithmInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageDigest`<sup>Required</sup> <a name="imageDigest" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.imageDigest"></a>

```typescript
public readonly imageDigest: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `kmsKeyVersionId`<sup>Required</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.kmsKeyVersionId"></a>

```typescript
public readonly kmsKeyVersionId: string;
```

- *Type:* string

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

---

##### `signingAlgorithm`<sup>Required</sup> <a name="signingAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.signingAlgorithm"></a>

```typescript
public readonly signingAlgorithm: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignatures.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciArtifactsContainerImageSignaturesConfig <a name="DataOciArtifactsContainerImageSignaturesConfig" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.Initializer"></a>

```typescript
import { dataOciArtifactsContainerImageSignatures } from 'rhizo-co-terraform-provider-oci'

const dataOciArtifactsContainerImageSignaturesConfig: dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#compartment_id DataOciArtifactsContainerImageSignatures#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#compartment_id_in_subtree DataOciArtifactsContainerImageSignatures#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#display_name DataOciArtifactsContainerImageSignatures#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilter">DataOciArtifactsContainerImageSignaturesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#id DataOciArtifactsContainerImageSignatures#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.imageDigest">imageDigest</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#image_digest DataOciArtifactsContainerImageSignatures#image_digest}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.imageId">imageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#image_id DataOciArtifactsContainerImageSignatures#image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#kms_key_id DataOciArtifactsContainerImageSignatures#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#kms_key_version_id DataOciArtifactsContainerImageSignatures#kms_key_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.repositoryId">repositoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#repository_id DataOciArtifactsContainerImageSignatures#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.repositoryName">repositoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#repository_name DataOciArtifactsContainerImageSignatures#repository_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.signingAlgorithm">signingAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#signing_algorithm DataOciArtifactsContainerImageSignatures#signing_algorithm}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#compartment_id DataOciArtifactsContainerImageSignatures#compartment_id}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#compartment_id_in_subtree DataOciArtifactsContainerImageSignatures#compartment_id_in_subtree}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#display_name DataOciArtifactsContainerImageSignatures#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciArtifactsContainerImageSignaturesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilter">DataOciArtifactsContainerImageSignaturesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#filter DataOciArtifactsContainerImageSignatures#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#id DataOciArtifactsContainerImageSignatures#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageDigest`<sup>Optional</sup> <a name="imageDigest" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.imageDigest"></a>

```typescript
public readonly imageDigest: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#image_digest DataOciArtifactsContainerImageSignatures#image_digest}.

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#image_id DataOciArtifactsContainerImageSignatures#image_id}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#kms_key_id DataOciArtifactsContainerImageSignatures#kms_key_id}.

---

##### `kmsKeyVersionId`<sup>Optional</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.kmsKeyVersionId"></a>

```typescript
public readonly kmsKeyVersionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#kms_key_version_id DataOciArtifactsContainerImageSignatures#kms_key_version_id}.

---

##### `repositoryId`<sup>Optional</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#repository_id DataOciArtifactsContainerImageSignatures#repository_id}.

---

##### `repositoryName`<sup>Optional</sup> <a name="repositoryName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#repository_name DataOciArtifactsContainerImageSignatures#repository_name}.

---

##### `signingAlgorithm`<sup>Optional</sup> <a name="signingAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesConfig.property.signingAlgorithm"></a>

```typescript
public readonly signingAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#signing_algorithm DataOciArtifactsContainerImageSignatures#signing_algorithm}.

---

### DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollection <a name="DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollection.Initializer"></a>

```typescript
import { dataOciArtifactsContainerImageSignatures } from 'rhizo-co-terraform-provider-oci'

const dataOciArtifactsContainerImageSignaturesContainerImageSignatureCollection: dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollection = { ... }
```


### DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItems <a name="DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItems.Initializer"></a>

```typescript
import { dataOciArtifactsContainerImageSignatures } from 'rhizo-co-terraform-provider-oci'

const dataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItems: dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItems = { ... }
```


### DataOciArtifactsContainerImageSignaturesFilter <a name="DataOciArtifactsContainerImageSignaturesFilter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilter.Initializer"></a>

```typescript
import { dataOciArtifactsContainerImageSignatures } from 'rhizo-co-terraform-provider-oci'

const dataOciArtifactsContainerImageSignaturesFilter: dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#name DataOciArtifactsContainerImageSignatures#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#values DataOciArtifactsContainerImageSignatures#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#regex DataOciArtifactsContainerImageSignatures#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#name DataOciArtifactsContainerImageSignatures#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#values DataOciArtifactsContainerImageSignatures#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signatures#regex DataOciArtifactsContainerImageSignatures#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList <a name="DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.Initializer"></a>

```typescript
import { dataOciArtifactsContainerImageSignatures } from 'rhizo-co-terraform-provider-oci'

new dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference <a name="DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciArtifactsContainerImageSignatures } from 'rhizo-co-terraform-provider-oci'

new dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.signature">signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.signingAlgorithm">signingAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItems">DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `kmsKeyVersionId`<sup>Required</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.kmsKeyVersionId"></a>

```typescript
public readonly kmsKeyVersionId: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `signature`<sup>Required</sup> <a name="signature" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

---

##### `signingAlgorithm`<sup>Required</sup> <a name="signingAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.signingAlgorithm"></a>

```typescript
public readonly signingAlgorithm: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItems">DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItems</a>

---


### DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList <a name="DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.Initializer"></a>

```typescript
import { dataOciArtifactsContainerImageSignatures } from 'rhizo-co-terraform-provider-oci'

new dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.get"></a>

```typescript
public get(index: number): DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference <a name="DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciArtifactsContainerImageSignatures } from 'rhizo-co-terraform-provider-oci'

new dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList">DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.property.remainingItemsCount">remainingItemsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollection">DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList">DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionItemsList</a>

---

##### `remainingItemsCount`<sup>Required</sup> <a name="remainingItemsCount" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.property.remainingItemsCount"></a>

```typescript
public readonly remainingItemsCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollection">DataOciArtifactsContainerImageSignaturesContainerImageSignatureCollection</a>

---


### DataOciArtifactsContainerImageSignaturesFilterList <a name="DataOciArtifactsContainerImageSignaturesFilterList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.Initializer"></a>

```typescript
import { dataOciArtifactsContainerImageSignatures } from 'rhizo-co-terraform-provider-oci'

new dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.get"></a>

```typescript
public get(index: number): DataOciArtifactsContainerImageSignaturesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilter">DataOciArtifactsContainerImageSignaturesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciArtifactsContainerImageSignaturesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilter">DataOciArtifactsContainerImageSignaturesFilter</a>[]

---


### DataOciArtifactsContainerImageSignaturesFilterOutputReference <a name="DataOciArtifactsContainerImageSignaturesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciArtifactsContainerImageSignatures } from 'rhizo-co-terraform-provider-oci'

new dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilter">DataOciArtifactsContainerImageSignaturesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciArtifactsContainerImageSignaturesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignatures.DataOciArtifactsContainerImageSignaturesFilter">DataOciArtifactsContainerImageSignaturesFilter</a>

---



