# `dataOciObjectstoragePrivateEndpointSummaries` Submodule <a name="`dataOciObjectstoragePrivateEndpointSummaries` Submodule" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciObjectstoragePrivateEndpointSummaries <a name="DataOciObjectstoragePrivateEndpointSummaries" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries oci_objectstorage_private_endpoint_summaries}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer"></a>

```typescript
import { dataOciObjectstoragePrivateEndpointSummaries } from 'rhizo-co-terraform-provider-oci'

new dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries(scope: Construct, id: string, config: DataOciObjectstoragePrivateEndpointSummariesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig">DataOciObjectstoragePrivateEndpointSummariesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig">DataOciObjectstoragePrivateEndpointSummariesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciObjectstoragePrivateEndpointSummariesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter">DataOciObjectstoragePrivateEndpointSummariesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciObjectstoragePrivateEndpointSummaries resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isConstruct"></a>

```typescript
import { dataOciObjectstoragePrivateEndpointSummaries } from 'rhizo-co-terraform-provider-oci'

dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isTerraformElement"></a>

```typescript
import { dataOciObjectstoragePrivateEndpointSummaries } from 'rhizo-co-terraform-provider-oci'

dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isTerraformDataSource"></a>

```typescript
import { dataOciObjectstoragePrivateEndpointSummaries } from 'rhizo-co-terraform-provider-oci'

dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.generateConfigForImport"></a>

```typescript
import { dataOciObjectstoragePrivateEndpointSummaries } from 'rhizo-co-terraform-provider-oci'

dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciObjectstoragePrivateEndpointSummaries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciObjectstoragePrivateEndpointSummaries to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciObjectstoragePrivateEndpointSummaries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciObjectstoragePrivateEndpointSummaries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList">DataOciObjectstoragePrivateEndpointSummariesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.privateEndpointSummaries">privateEndpointSummaries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList">DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter">DataOciObjectstoragePrivateEndpointSummariesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.filter"></a>

```typescript
public readonly filter: DataOciObjectstoragePrivateEndpointSummariesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList">DataOciObjectstoragePrivateEndpointSummariesFilterList</a>

---

##### `privateEndpointSummaries`<sup>Required</sup> <a name="privateEndpointSummaries" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.privateEndpointSummaries"></a>

```typescript
public readonly privateEndpointSummaries: DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList">DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciObjectstoragePrivateEndpointSummariesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter">DataOciObjectstoragePrivateEndpointSummariesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciObjectstoragePrivateEndpointSummariesConfig <a name="DataOciObjectstoragePrivateEndpointSummariesConfig" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.Initializer"></a>

```typescript
import { dataOciObjectstoragePrivateEndpointSummaries } from 'rhizo-co-terraform-provider-oci'

const dataOciObjectstoragePrivateEndpointSummariesConfig: dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#compartment_id DataOciObjectstoragePrivateEndpointSummaries#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#namespace DataOciObjectstoragePrivateEndpointSummaries#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter">DataOciObjectstoragePrivateEndpointSummariesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#id DataOciObjectstoragePrivateEndpointSummaries#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#compartment_id DataOciObjectstoragePrivateEndpointSummaries#compartment_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#namespace DataOciObjectstoragePrivateEndpointSummaries#namespace}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciObjectstoragePrivateEndpointSummariesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter">DataOciObjectstoragePrivateEndpointSummariesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#filter DataOciObjectstoragePrivateEndpointSummaries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#id DataOciObjectstoragePrivateEndpointSummaries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciObjectstoragePrivateEndpointSummariesFilter <a name="DataOciObjectstoragePrivateEndpointSummariesFilter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter.Initializer"></a>

```typescript
import { dataOciObjectstoragePrivateEndpointSummaries } from 'rhizo-co-terraform-provider-oci'

const dataOciObjectstoragePrivateEndpointSummariesFilter: dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#name DataOciObjectstoragePrivateEndpointSummaries#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#values DataOciObjectstoragePrivateEndpointSummaries#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#regex DataOciObjectstoragePrivateEndpointSummaries#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#name DataOciObjectstoragePrivateEndpointSummaries#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#values DataOciObjectstoragePrivateEndpointSummaries#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#regex DataOciObjectstoragePrivateEndpointSummaries#regex}.

---

### DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries <a name="DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries.Initializer"></a>

```typescript
import { dataOciObjectstoragePrivateEndpointSummaries } from 'rhizo-co-terraform-provider-oci'

const dataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries: dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries = { ... }
```


### DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets <a name="DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets.Initializer"></a>

```typescript
import { dataOciObjectstoragePrivateEndpointSummaries } from 'rhizo-co-terraform-provider-oci'

const dataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets: dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciObjectstoragePrivateEndpointSummariesFilterList <a name="DataOciObjectstoragePrivateEndpointSummariesFilterList" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.Initializer"></a>

```typescript
import { dataOciObjectstoragePrivateEndpointSummaries } from 'rhizo-co-terraform-provider-oci'

new dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.get"></a>

```typescript
public get(index: number): DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter">DataOciObjectstoragePrivateEndpointSummariesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciObjectstoragePrivateEndpointSummariesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter">DataOciObjectstoragePrivateEndpointSummariesFilter</a>[]

---


### DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference <a name="DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciObjectstoragePrivateEndpointSummaries } from 'rhizo-co-terraform-provider-oci'

new dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter">DataOciObjectstoragePrivateEndpointSummariesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciObjectstoragePrivateEndpointSummariesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter">DataOciObjectstoragePrivateEndpointSummariesFilter</a>

---


### DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList <a name="DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.Initializer"></a>

```typescript
import { dataOciObjectstoragePrivateEndpointSummaries } from 'rhizo-co-terraform-provider-oci'

new dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.get"></a>

```typescript
public get(index: number): DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference <a name="DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer"></a>

```typescript
import { dataOciObjectstoragePrivateEndpointSummaries } from 'rhizo-co-terraform-provider-oci'

new dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets">DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets">DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets</a>

---


### DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList <a name="DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.Initializer"></a>

```typescript
import { dataOciObjectstoragePrivateEndpointSummaries } from 'rhizo-co-terraform-provider-oci'

new dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.get"></a>

```typescript
public get(index: number): DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference <a name="DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer"></a>

```typescript
import { dataOciObjectstoragePrivateEndpointSummaries } from 'rhizo-co-terraform-provider-oci'

new dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.accessTargets">accessTargets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList">DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.additionalPrefixes">additionalPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.fqdns">fqdns</a></code> | <code>cdktf.AnyMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.privateEndpointIp">privateEndpointIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.timeModified">timeModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries">DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessTargets`<sup>Required</sup> <a name="accessTargets" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.accessTargets"></a>

```typescript
public readonly accessTargets: DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList">DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList</a>

---

##### `additionalPrefixes`<sup>Required</sup> <a name="additionalPrefixes" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.additionalPrefixes"></a>

```typescript
public readonly additionalPrefixes: string[];
```

- *Type:* string[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `fqdns`<sup>Required</sup> <a name="fqdns" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.fqdns"></a>

```typescript
public readonly fqdns: AnyMap;
```

- *Type:* cdktf.AnyMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `privateEndpointIp`<sup>Required</sup> <a name="privateEndpointIp" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.privateEndpointIp"></a>

```typescript
public readonly privateEndpointIp: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeModified`<sup>Required</sup> <a name="timeModified" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.timeModified"></a>

```typescript
public readonly timeModified: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries">DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries</a>

---



