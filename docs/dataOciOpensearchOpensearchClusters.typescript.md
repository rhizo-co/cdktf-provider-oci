# `dataOciOpensearchOpensearchClusters` Submodule <a name="`dataOciOpensearchOpensearchClusters` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpensearchOpensearchClusters <a name="DataOciOpensearchOpensearchClusters" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters oci_opensearch_opensearch_clusters}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer"></a>

```typescript
import { dataOciOpensearchOpensearchClusters } from 'rhizo-co-terraform-provider-oci'

new dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters(scope: Construct, id: string, config: DataOciOpensearchOpensearchClustersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig">DataOciOpensearchOpensearchClustersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig">DataOciOpensearchOpensearchClustersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOpensearchOpensearchClustersFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter">DataOciOpensearchOpensearchClustersFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpensearchOpensearchClusters resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.isConstruct"></a>

```typescript
import { dataOciOpensearchOpensearchClusters } from 'rhizo-co-terraform-provider-oci'

dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.isTerraformElement"></a>

```typescript
import { dataOciOpensearchOpensearchClusters } from 'rhizo-co-terraform-provider-oci'

dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.isTerraformDataSource"></a>

```typescript
import { dataOciOpensearchOpensearchClusters } from 'rhizo-co-terraform-provider-oci'

dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.generateConfigForImport"></a>

```typescript
import { dataOciOpensearchOpensearchClusters } from 'rhizo-co-terraform-provider-oci'

dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOpensearchOpensearchClusters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOpensearchOpensearchClusters to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOpensearchOpensearchClusters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpensearchOpensearchClusters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList">DataOciOpensearchOpensearchClustersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.opensearchClusterCollection">opensearchClusterCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList">DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter">DataOciOpensearchOpensearchClustersFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.filter"></a>

```typescript
public readonly filter: DataOciOpensearchOpensearchClustersFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList">DataOciOpensearchOpensearchClustersFilterList</a>

---

##### `opensearchClusterCollection`<sup>Required</sup> <a name="opensearchClusterCollection" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.opensearchClusterCollection"></a>

```typescript
public readonly opensearchClusterCollection: DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList">DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOpensearchOpensearchClustersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter">DataOciOpensearchOpensearchClustersFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpensearchOpensearchClustersConfig <a name="DataOciOpensearchOpensearchClustersConfig" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.Initializer"></a>

```typescript
import { dataOciOpensearchOpensearchClusters } from 'rhizo-co-terraform-provider-oci'

const dataOciOpensearchOpensearchClustersConfig: dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#compartment_id DataOciOpensearchOpensearchClusters#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#display_name DataOciOpensearchOpensearchClusters#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter">DataOciOpensearchOpensearchClustersFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#id DataOciOpensearchOpensearchClusters#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#state DataOciOpensearchOpensearchClusters#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#compartment_id DataOciOpensearchOpensearchClusters#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#display_name DataOciOpensearchOpensearchClusters#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOpensearchOpensearchClustersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter">DataOciOpensearchOpensearchClustersFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#filter DataOciOpensearchOpensearchClusters#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#id DataOciOpensearchOpensearchClusters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#state DataOciOpensearchOpensearchClusters#state}.

---

### DataOciOpensearchOpensearchClustersFilter <a name="DataOciOpensearchOpensearchClustersFilter" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter.Initializer"></a>

```typescript
import { dataOciOpensearchOpensearchClusters } from 'rhizo-co-terraform-provider-oci'

const dataOciOpensearchOpensearchClustersFilter: dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#name DataOciOpensearchOpensearchClusters#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#values DataOciOpensearchOpensearchClusters#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#regex DataOciOpensearchOpensearchClusters#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#name DataOciOpensearchOpensearchClusters#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#values DataOciOpensearchOpensearchClusters#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#regex DataOciOpensearchOpensearchClusters#regex}.

---

### DataOciOpensearchOpensearchClustersOpensearchClusterCollection <a name="DataOciOpensearchOpensearchClustersOpensearchClusterCollection" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollection.Initializer"></a>

```typescript
import { dataOciOpensearchOpensearchClusters } from 'rhizo-co-terraform-provider-oci'

const dataOciOpensearchOpensearchClustersOpensearchClusterCollection: dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollection = { ... }
```


### DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems <a name="DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems.Initializer"></a>

```typescript
import { dataOciOpensearchOpensearchClusters } from 'rhizo-co-terraform-provider-oci'

const dataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems: dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOpensearchOpensearchClustersFilterList <a name="DataOciOpensearchOpensearchClustersFilterList" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.Initializer"></a>

```typescript
import { dataOciOpensearchOpensearchClusters } from 'rhizo-co-terraform-provider-oci'

new dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.get"></a>

```typescript
public get(index: number): DataOciOpensearchOpensearchClustersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter">DataOciOpensearchOpensearchClustersFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOpensearchOpensearchClustersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter">DataOciOpensearchOpensearchClustersFilter</a>[]

---


### DataOciOpensearchOpensearchClustersFilterOutputReference <a name="DataOciOpensearchOpensearchClustersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOpensearchOpensearchClusters } from 'rhizo-co-terraform-provider-oci'

new dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter">DataOciOpensearchOpensearchClustersFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOpensearchOpensearchClustersFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter">DataOciOpensearchOpensearchClustersFilter</a>

---


### DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList <a name="DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.Initializer"></a>

```typescript
import { dataOciOpensearchOpensearchClusters } from 'rhizo-co-terraform-provider-oci'

new dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference <a name="DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOpensearchOpensearchClusters } from 'rhizo-co-terraform-provider-oci'

new dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.availabilityDomains">availabilityDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeCount">dataNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeHostBareMetalShape">dataNodeHostBareMetalShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeHostMemoryGb">dataNodeHostMemoryGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeHostOcpuCount">dataNodeHostOcpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeHostType">dataNodeHostType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeStorageGb">dataNodeStorageGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.masterNodeCount">masterNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.masterNodeHostBareMetalShape">masterNodeHostBareMetalShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.masterNodeHostMemoryGb">masterNodeHostMemoryGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.masterNodeHostOcpuCount">masterNodeHostOcpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.masterNodeHostType">masterNodeHostType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opendashboardFqdn">opendashboardFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opendashboardNodeCount">opendashboardNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opendashboardNodeHostMemoryGb">opendashboardNodeHostMemoryGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opendashboardNodeHostOcpuCount">opendashboardNodeHostOcpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opendashboardPrivateIp">opendashboardPrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opensearchFqdn">opensearchFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opensearchPrivateIp">opensearchPrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.securityMasterUserName">securityMasterUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.securityMasterUserPasswordHash">securityMasterUserPasswordHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.securityMode">securityMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.softwareVersion">softwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.subnetCompartmentId">subnetCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.timeDeleted">timeDeleted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.totalStorageGb">totalStorageGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.vcnCompartmentId">vcnCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems">DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomains`<sup>Required</sup> <a name="availabilityDomains" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.availabilityDomains"></a>

```typescript
public readonly availabilityDomains: string[];
```

- *Type:* string[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dataNodeCount`<sup>Required</sup> <a name="dataNodeCount" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeCount"></a>

```typescript
public readonly dataNodeCount: number;
```

- *Type:* number

---

##### `dataNodeHostBareMetalShape`<sup>Required</sup> <a name="dataNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeHostBareMetalShape"></a>

```typescript
public readonly dataNodeHostBareMetalShape: string;
```

- *Type:* string

---

##### `dataNodeHostMemoryGb`<sup>Required</sup> <a name="dataNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeHostMemoryGb"></a>

```typescript
public readonly dataNodeHostMemoryGb: number;
```

- *Type:* number

---

##### `dataNodeHostOcpuCount`<sup>Required</sup> <a name="dataNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeHostOcpuCount"></a>

```typescript
public readonly dataNodeHostOcpuCount: number;
```

- *Type:* number

---

##### `dataNodeHostType`<sup>Required</sup> <a name="dataNodeHostType" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeHostType"></a>

```typescript
public readonly dataNodeHostType: string;
```

- *Type:* string

---

##### `dataNodeStorageGb`<sup>Required</sup> <a name="dataNodeStorageGb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeStorageGb"></a>

```typescript
public readonly dataNodeStorageGb: number;
```

- *Type:* number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `masterNodeCount`<sup>Required</sup> <a name="masterNodeCount" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.masterNodeCount"></a>

```typescript
public readonly masterNodeCount: number;
```

- *Type:* number

---

##### `masterNodeHostBareMetalShape`<sup>Required</sup> <a name="masterNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.masterNodeHostBareMetalShape"></a>

```typescript
public readonly masterNodeHostBareMetalShape: string;
```

- *Type:* string

---

##### `masterNodeHostMemoryGb`<sup>Required</sup> <a name="masterNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.masterNodeHostMemoryGb"></a>

```typescript
public readonly masterNodeHostMemoryGb: number;
```

- *Type:* number

---

##### `masterNodeHostOcpuCount`<sup>Required</sup> <a name="masterNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.masterNodeHostOcpuCount"></a>

```typescript
public readonly masterNodeHostOcpuCount: number;
```

- *Type:* number

---

##### `masterNodeHostType`<sup>Required</sup> <a name="masterNodeHostType" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.masterNodeHostType"></a>

```typescript
public readonly masterNodeHostType: string;
```

- *Type:* string

---

##### `opendashboardFqdn`<sup>Required</sup> <a name="opendashboardFqdn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opendashboardFqdn"></a>

```typescript
public readonly opendashboardFqdn: string;
```

- *Type:* string

---

##### `opendashboardNodeCount`<sup>Required</sup> <a name="opendashboardNodeCount" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opendashboardNodeCount"></a>

```typescript
public readonly opendashboardNodeCount: number;
```

- *Type:* number

---

##### `opendashboardNodeHostMemoryGb`<sup>Required</sup> <a name="opendashboardNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opendashboardNodeHostMemoryGb"></a>

```typescript
public readonly opendashboardNodeHostMemoryGb: number;
```

- *Type:* number

---

##### `opendashboardNodeHostOcpuCount`<sup>Required</sup> <a name="opendashboardNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opendashboardNodeHostOcpuCount"></a>

```typescript
public readonly opendashboardNodeHostOcpuCount: number;
```

- *Type:* number

---

##### `opendashboardPrivateIp`<sup>Required</sup> <a name="opendashboardPrivateIp" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opendashboardPrivateIp"></a>

```typescript
public readonly opendashboardPrivateIp: string;
```

- *Type:* string

---

##### `opensearchFqdn`<sup>Required</sup> <a name="opensearchFqdn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opensearchFqdn"></a>

```typescript
public readonly opensearchFqdn: string;
```

- *Type:* string

---

##### `opensearchPrivateIp`<sup>Required</sup> <a name="opensearchPrivateIp" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opensearchPrivateIp"></a>

```typescript
public readonly opensearchPrivateIp: string;
```

- *Type:* string

---

##### `securityMasterUserName`<sup>Required</sup> <a name="securityMasterUserName" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.securityMasterUserName"></a>

```typescript
public readonly securityMasterUserName: string;
```

- *Type:* string

---

##### `securityMasterUserPasswordHash`<sup>Required</sup> <a name="securityMasterUserPasswordHash" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.securityMasterUserPasswordHash"></a>

```typescript
public readonly securityMasterUserPasswordHash: string;
```

- *Type:* string

---

##### `securityMode`<sup>Required</sup> <a name="securityMode" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.securityMode"></a>

```typescript
public readonly securityMode: string;
```

- *Type:* string

---

##### `softwareVersion`<sup>Required</sup> <a name="softwareVersion" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.softwareVersion"></a>

```typescript
public readonly softwareVersion: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnetCompartmentId`<sup>Required</sup> <a name="subnetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.subnetCompartmentId"></a>

```typescript
public readonly subnetCompartmentId: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeDeleted`<sup>Required</sup> <a name="timeDeleted" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.timeDeleted"></a>

```typescript
public readonly timeDeleted: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `totalStorageGb`<sup>Required</sup> <a name="totalStorageGb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.totalStorageGb"></a>

```typescript
public readonly totalStorageGb: number;
```

- *Type:* number

---

##### `vcnCompartmentId`<sup>Required</sup> <a name="vcnCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.vcnCompartmentId"></a>

```typescript
public readonly vcnCompartmentId: string;
```

- *Type:* string

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems">DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems</a>

---


### DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList <a name="DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.Initializer"></a>

```typescript
import { dataOciOpensearchOpensearchClusters } from 'rhizo-co-terraform-provider-oci'

new dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.get"></a>

```typescript
public get(index: number): DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference <a name="DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciOpensearchOpensearchClusters } from 'rhizo-co-terraform-provider-oci'

new dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList">DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollection">DataOciOpensearchOpensearchClustersOpensearchClusterCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList">DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpensearchOpensearchClustersOpensearchClusterCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollection">DataOciOpensearchOpensearchClustersOpensearchClusterCollection</a>

---



