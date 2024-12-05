# `dataOciArtifactsContainerRepositories` Submodule <a name="`dataOciArtifactsContainerRepositories` Submodule" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciArtifactsContainerRepositories <a name="DataOciArtifactsContainerRepositories" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories oci_artifacts_container_repositories}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer"></a>

```typescript
import { dataOciArtifactsContainerRepositories } from 'rhizo-co-terraform-provider-oci'

new dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories(scope: Construct, id: string, config: DataOciArtifactsContainerRepositoriesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig">DataOciArtifactsContainerRepositoriesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig">DataOciArtifactsContainerRepositoriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetIsPublic">resetIsPublic</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetRepositoryId">resetRepositoryId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciArtifactsContainerRepositoriesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter">DataOciArtifactsContainerRepositoriesFilter</a>[]

---

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsPublic` <a name="resetIsPublic" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetIsPublic"></a>

```typescript
public resetIsPublic(): void
```

##### `resetRepositoryId` <a name="resetRepositoryId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetRepositoryId"></a>

```typescript
public resetRepositoryId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciArtifactsContainerRepositories resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isConstruct"></a>

```typescript
import { dataOciArtifactsContainerRepositories } from 'rhizo-co-terraform-provider-oci'

dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isTerraformElement"></a>

```typescript
import { dataOciArtifactsContainerRepositories } from 'rhizo-co-terraform-provider-oci'

dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isTerraformDataSource"></a>

```typescript
import { dataOciArtifactsContainerRepositories } from 'rhizo-co-terraform-provider-oci'

dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.generateConfigForImport"></a>

```typescript
import { dataOciArtifactsContainerRepositories } from 'rhizo-co-terraform-provider-oci'

dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciArtifactsContainerRepositories resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciArtifactsContainerRepositories to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciArtifactsContainerRepositories that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciArtifactsContainerRepositories to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.containerRepositoryCollection">containerRepositoryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList">DataOciArtifactsContainerRepositoriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter">DataOciArtifactsContainerRepositoriesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.isPublicInput">isPublicInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.repositoryIdInput">repositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.isPublic">isPublic</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.repositoryId">repositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `containerRepositoryCollection`<sup>Required</sup> <a name="containerRepositoryCollection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.containerRepositoryCollection"></a>

```typescript
public readonly containerRepositoryCollection: DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.filter"></a>

```typescript
public readonly filter: DataOciArtifactsContainerRepositoriesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList">DataOciArtifactsContainerRepositoriesFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciArtifactsContainerRepositoriesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter">DataOciArtifactsContainerRepositoriesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isPublicInput`<sup>Optional</sup> <a name="isPublicInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.isPublicInput"></a>

```typescript
public readonly isPublicInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.repositoryIdInput"></a>

```typescript
public readonly repositoryIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isPublic`<sup>Required</sup> <a name="isPublic" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.isPublic"></a>

```typescript
public readonly isPublic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciArtifactsContainerRepositoriesConfig <a name="DataOciArtifactsContainerRepositoriesConfig" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.Initializer"></a>

```typescript
import { dataOciArtifactsContainerRepositories } from 'rhizo-co-terraform-provider-oci'

const dataOciArtifactsContainerRepositoriesConfig: dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#compartment_id DataOciArtifactsContainerRepositories#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#compartment_id_in_subtree DataOciArtifactsContainerRepositories#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#display_name DataOciArtifactsContainerRepositories#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter">DataOciArtifactsContainerRepositoriesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#id DataOciArtifactsContainerRepositories#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.isPublic">isPublic</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#is_public DataOciArtifactsContainerRepositories#is_public}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.repositoryId">repositoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#repository_id DataOciArtifactsContainerRepositories#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#state DataOciArtifactsContainerRepositories#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#compartment_id DataOciArtifactsContainerRepositories#compartment_id}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#compartment_id_in_subtree DataOciArtifactsContainerRepositories#compartment_id_in_subtree}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#display_name DataOciArtifactsContainerRepositories#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciArtifactsContainerRepositoriesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter">DataOciArtifactsContainerRepositoriesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#filter DataOciArtifactsContainerRepositories#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#id DataOciArtifactsContainerRepositories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isPublic`<sup>Optional</sup> <a name="isPublic" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.isPublic"></a>

```typescript
public readonly isPublic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#is_public DataOciArtifactsContainerRepositories#is_public}.

---

##### `repositoryId`<sup>Optional</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#repository_id DataOciArtifactsContainerRepositories#repository_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#state DataOciArtifactsContainerRepositories#state}.

---

### DataOciArtifactsContainerRepositoriesContainerRepositoryCollection <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollection.Initializer"></a>

```typescript
import { dataOciArtifactsContainerRepositories } from 'rhizo-co-terraform-provider-oci'

const dataOciArtifactsContainerRepositoriesContainerRepositoryCollection: dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollection = { ... }
```


### DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems.Initializer"></a>

```typescript
import { dataOciArtifactsContainerRepositories } from 'rhizo-co-terraform-provider-oci'

const dataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems: dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems = { ... }
```


### DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme.Initializer"></a>

```typescript
import { dataOciArtifactsContainerRepositories } from 'rhizo-co-terraform-provider-oci'

const dataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme: dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme = { ... }
```


### DataOciArtifactsContainerRepositoriesFilter <a name="DataOciArtifactsContainerRepositoriesFilter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter.Initializer"></a>

```typescript
import { dataOciArtifactsContainerRepositories } from 'rhizo-co-terraform-provider-oci'

const dataOciArtifactsContainerRepositoriesFilter: dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#name DataOciArtifactsContainerRepositories#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#values DataOciArtifactsContainerRepositories#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#regex DataOciArtifactsContainerRepositories#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#name DataOciArtifactsContainerRepositories#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#values DataOciArtifactsContainerRepositories#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#regex DataOciArtifactsContainerRepositories#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.Initializer"></a>

```typescript
import { dataOciArtifactsContainerRepositories } from 'rhizo-co-terraform-provider-oci'

new dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciArtifactsContainerRepositories } from 'rhizo-co-terraform-provider-oci'

new dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.billableSizeInGbs">billableSizeInGbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.imageCount">imageCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.isImmutable">isImmutable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.isPublic">isPublic</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.layerCount">layerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.layersSizeInBytes">layersSizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.readme">readme</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.timeLastPushed">timeLastPushed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `billableSizeInGbs`<sup>Required</sup> <a name="billableSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.billableSizeInGbs"></a>

```typescript
public readonly billableSizeInGbs: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageCount`<sup>Required</sup> <a name="imageCount" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.imageCount"></a>

```typescript
public readonly imageCount: number;
```

- *Type:* number

---

##### `isImmutable`<sup>Required</sup> <a name="isImmutable" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.isImmutable"></a>

```typescript
public readonly isImmutable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isPublic`<sup>Required</sup> <a name="isPublic" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.isPublic"></a>

```typescript
public readonly isPublic: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `layerCount`<sup>Required</sup> <a name="layerCount" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.layerCount"></a>

```typescript
public readonly layerCount: number;
```

- *Type:* number

---

##### `layersSizeInBytes`<sup>Required</sup> <a name="layersSizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.layersSizeInBytes"></a>

```typescript
public readonly layersSizeInBytes: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `readme`<sup>Required</sup> <a name="readme" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.readme"></a>

```typescript
public readonly readme: DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeLastPushed`<sup>Required</sup> <a name="timeLastPushed" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.timeLastPushed"></a>

```typescript
public readonly timeLastPushed: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems</a>

---


### DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.Initializer"></a>

```typescript
import { dataOciArtifactsContainerRepositories } from 'rhizo-co-terraform-provider-oci'

new dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.get"></a>

```typescript
public get(index: number): DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer"></a>

```typescript
import { dataOciArtifactsContainerRepositories } from 'rhizo-co-terraform-provider-oci'

new dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme</a>

---


### DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.Initializer"></a>

```typescript
import { dataOciArtifactsContainerRepositories } from 'rhizo-co-terraform-provider-oci'

new dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.get"></a>

```typescript
public get(index: number): DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciArtifactsContainerRepositories } from 'rhizo-co-terraform-provider-oci'

new dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.imageCount">imageCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.layerCount">layerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.layersSizeInBytes">layersSizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.remainingItemsCount">remainingItemsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.repositoryCount">repositoryCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollection">DataOciArtifactsContainerRepositoriesContainerRepositoryCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageCount`<sup>Required</sup> <a name="imageCount" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.imageCount"></a>

```typescript
public readonly imageCount: number;
```

- *Type:* number

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList</a>

---

##### `layerCount`<sup>Required</sup> <a name="layerCount" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.layerCount"></a>

```typescript
public readonly layerCount: number;
```

- *Type:* number

---

##### `layersSizeInBytes`<sup>Required</sup> <a name="layersSizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.layersSizeInBytes"></a>

```typescript
public readonly layersSizeInBytes: string;
```

- *Type:* string

---

##### `remainingItemsCount`<sup>Required</sup> <a name="remainingItemsCount" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.remainingItemsCount"></a>

```typescript
public readonly remainingItemsCount: number;
```

- *Type:* number

---

##### `repositoryCount`<sup>Required</sup> <a name="repositoryCount" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.repositoryCount"></a>

```typescript
public readonly repositoryCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciArtifactsContainerRepositoriesContainerRepositoryCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollection">DataOciArtifactsContainerRepositoriesContainerRepositoryCollection</a>

---


### DataOciArtifactsContainerRepositoriesFilterList <a name="DataOciArtifactsContainerRepositoriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.Initializer"></a>

```typescript
import { dataOciArtifactsContainerRepositories } from 'rhizo-co-terraform-provider-oci'

new dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.get"></a>

```typescript
public get(index: number): DataOciArtifactsContainerRepositoriesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter">DataOciArtifactsContainerRepositoriesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciArtifactsContainerRepositoriesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter">DataOciArtifactsContainerRepositoriesFilter</a>[]

---


### DataOciArtifactsContainerRepositoriesFilterOutputReference <a name="DataOciArtifactsContainerRepositoriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciArtifactsContainerRepositories } from 'rhizo-co-terraform-provider-oci'

new dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter">DataOciArtifactsContainerRepositoriesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciArtifactsContainerRepositoriesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter">DataOciArtifactsContainerRepositoriesFilter</a>

---



