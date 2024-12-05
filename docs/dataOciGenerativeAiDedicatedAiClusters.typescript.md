# `dataOciGenerativeAiDedicatedAiClusters` Submodule <a name="`dataOciGenerativeAiDedicatedAiClusters` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGenerativeAiDedicatedAiClusters <a name="DataOciGenerativeAiDedicatedAiClusters" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters oci_generative_ai_dedicated_ai_clusters}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.Initializer"></a>

```typescript
import { dataOciGenerativeAiDedicatedAiClusters } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters(scope: Construct, id: string, config: DataOciGenerativeAiDedicatedAiClustersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig">DataOciGenerativeAiDedicatedAiClustersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig">DataOciGenerativeAiDedicatedAiClustersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciGenerativeAiDedicatedAiClustersFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilter">DataOciGenerativeAiDedicatedAiClustersFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGenerativeAiDedicatedAiClusters resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.isConstruct"></a>

```typescript
import { dataOciGenerativeAiDedicatedAiClusters } from 'rhizo-co-terraform-provider-oci'

dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.isTerraformElement"></a>

```typescript
import { dataOciGenerativeAiDedicatedAiClusters } from 'rhizo-co-terraform-provider-oci'

dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.isTerraformDataSource"></a>

```typescript
import { dataOciGenerativeAiDedicatedAiClusters } from 'rhizo-co-terraform-provider-oci'

dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.generateConfigForImport"></a>

```typescript
import { dataOciGenerativeAiDedicatedAiClusters } from 'rhizo-co-terraform-provider-oci'

dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciGenerativeAiDedicatedAiClusters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciGenerativeAiDedicatedAiClusters to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciGenerativeAiDedicatedAiClusters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGenerativeAiDedicatedAiClusters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.dedicatedAiClusterCollection">dedicatedAiClusterCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList">DataOciGenerativeAiDedicatedAiClustersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilter">DataOciGenerativeAiDedicatedAiClustersFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dedicatedAiClusterCollection`<sup>Required</sup> <a name="dedicatedAiClusterCollection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.dedicatedAiClusterCollection"></a>

```typescript
public readonly dedicatedAiClusterCollection: DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.filter"></a>

```typescript
public readonly filter: DataOciGenerativeAiDedicatedAiClustersFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList">DataOciGenerativeAiDedicatedAiClustersFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciGenerativeAiDedicatedAiClustersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilter">DataOciGenerativeAiDedicatedAiClustersFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClusters.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGenerativeAiDedicatedAiClustersConfig <a name="DataOciGenerativeAiDedicatedAiClustersConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.Initializer"></a>

```typescript
import { dataOciGenerativeAiDedicatedAiClusters } from 'rhizo-co-terraform-provider-oci'

const dataOciGenerativeAiDedicatedAiClustersConfig: dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#compartment_id DataOciGenerativeAiDedicatedAiClusters#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#display_name DataOciGenerativeAiDedicatedAiClusters#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilter">DataOciGenerativeAiDedicatedAiClustersFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#id DataOciGenerativeAiDedicatedAiClusters#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#state DataOciGenerativeAiDedicatedAiClusters#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#compartment_id DataOciGenerativeAiDedicatedAiClusters#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#display_name DataOciGenerativeAiDedicatedAiClusters#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciGenerativeAiDedicatedAiClustersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilter">DataOciGenerativeAiDedicatedAiClustersFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#filter DataOciGenerativeAiDedicatedAiClusters#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#id DataOciGenerativeAiDedicatedAiClusters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#state DataOciGenerativeAiDedicatedAiClusters#state}.

---

### DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollection <a name="DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollection.Initializer"></a>

```typescript
import { dataOciGenerativeAiDedicatedAiClusters } from 'rhizo-co-terraform-provider-oci'

const dataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollection: dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollection = { ... }
```


### DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItems <a name="DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItems.Initializer"></a>

```typescript
import { dataOciGenerativeAiDedicatedAiClusters } from 'rhizo-co-terraform-provider-oci'

const dataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItems: dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItems = { ... }
```


### DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacity <a name="DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacity" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacity.Initializer"></a>

```typescript
import { dataOciGenerativeAiDedicatedAiClusters } from 'rhizo-co-terraform-provider-oci'

const dataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacity: dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacity = { ... }
```


### DataOciGenerativeAiDedicatedAiClustersFilter <a name="DataOciGenerativeAiDedicatedAiClustersFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilter.Initializer"></a>

```typescript
import { dataOciGenerativeAiDedicatedAiClusters } from 'rhizo-co-terraform-provider-oci'

const dataOciGenerativeAiDedicatedAiClustersFilter: dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#name DataOciGenerativeAiDedicatedAiClusters#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#values DataOciGenerativeAiDedicatedAiClusters#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#regex DataOciGenerativeAiDedicatedAiClusters#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#name DataOciGenerativeAiDedicatedAiClusters#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#values DataOciGenerativeAiDedicatedAiClusters#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_clusters#regex DataOciGenerativeAiDedicatedAiClusters#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList <a name="DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.Initializer"></a>

```typescript
import { dataOciGenerativeAiDedicatedAiClusters } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.get"></a>

```typescript
public get(index: number): DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference <a name="DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.Initializer"></a>

```typescript
import { dataOciGenerativeAiDedicatedAiClusters } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.capacityType">capacityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.totalEndpointCapacity">totalEndpointCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.usedEndpointCapacity">usedEndpointCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacity">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityType`<sup>Required</sup> <a name="capacityType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.capacityType"></a>

```typescript
public readonly capacityType: string;
```

- *Type:* string

---

##### `totalEndpointCapacity`<sup>Required</sup> <a name="totalEndpointCapacity" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.totalEndpointCapacity"></a>

```typescript
public readonly totalEndpointCapacity: number;
```

- *Type:* number

---

##### `usedEndpointCapacity`<sup>Required</sup> <a name="usedEndpointCapacity" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.usedEndpointCapacity"></a>

```typescript
public readonly usedEndpointCapacity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacity;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacity">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacity</a>

---


### DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList <a name="DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.Initializer"></a>

```typescript
import { dataOciGenerativeAiDedicatedAiClusters } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference <a name="DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciGenerativeAiDedicatedAiClusters } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.capacity">capacity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.unitCount">unitCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.unitShape">unitShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItems">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.capacity"></a>

```typescript
public readonly capacity: DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsCapacityList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `unitCount`<sup>Required</sup> <a name="unitCount" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.unitCount"></a>

```typescript
public readonly unitCount: number;
```

- *Type:* number

---

##### `unitShape`<sup>Required</sup> <a name="unitShape" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.unitShape"></a>

```typescript
public readonly unitShape: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItems">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItems</a>

---


### DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList <a name="DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.Initializer"></a>

```typescript
import { dataOciGenerativeAiDedicatedAiClusters } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.get"></a>

```typescript
public get(index: number): DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference <a name="DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciGenerativeAiDedicatedAiClusters } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollection">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollection">DataOciGenerativeAiDedicatedAiClustersDedicatedAiClusterCollection</a>

---


### DataOciGenerativeAiDedicatedAiClustersFilterList <a name="DataOciGenerativeAiDedicatedAiClustersFilterList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.Initializer"></a>

```typescript
import { dataOciGenerativeAiDedicatedAiClusters } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.get"></a>

```typescript
public get(index: number): DataOciGenerativeAiDedicatedAiClustersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilter">DataOciGenerativeAiDedicatedAiClustersFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciGenerativeAiDedicatedAiClustersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilter">DataOciGenerativeAiDedicatedAiClustersFilter</a>[]

---


### DataOciGenerativeAiDedicatedAiClustersFilterOutputReference <a name="DataOciGenerativeAiDedicatedAiClustersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.Initializer"></a>

```typescript
import { dataOciGenerativeAiDedicatedAiClusters } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilter">DataOciGenerativeAiDedicatedAiClustersFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciGenerativeAiDedicatedAiClustersFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiClusters.DataOciGenerativeAiDedicatedAiClustersFilter">DataOciGenerativeAiDedicatedAiClustersFilter</a>

---



