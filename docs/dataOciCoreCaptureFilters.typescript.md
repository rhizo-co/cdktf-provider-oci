# `dataOciCoreCaptureFilters` Submodule <a name="`dataOciCoreCaptureFilters` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreCaptureFilters <a name="DataOciCoreCaptureFilters" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters oci_core_capture_filters}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFilters(scope: Construct, id: string, config: DataOciCoreCaptureFiltersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig">DataOciCoreCaptureFiltersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig">DataOciCoreCaptureFiltersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.resetFilterType">resetFilterType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCoreCaptureFiltersFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter">DataOciCoreCaptureFiltersFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetFilterType` <a name="resetFilterType" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.resetFilterType"></a>

```typescript
public resetFilterType(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreCaptureFilters resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.isConstruct"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.isTerraformElement"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.isTerraformDataSource"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.generateConfigForImport"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreCaptureFilters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreCaptureFilters to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreCaptureFilters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreCaptureFilters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.captureFilters">captureFilters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList">DataOciCoreCaptureFiltersCaptureFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList">DataOciCoreCaptureFiltersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter">DataOciCoreCaptureFiltersFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.filterTypeInput">filterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.filterType">filterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `captureFilters`<sup>Required</sup> <a name="captureFilters" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.captureFilters"></a>

```typescript
public readonly captureFilters: DataOciCoreCaptureFiltersCaptureFiltersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList">DataOciCoreCaptureFiltersCaptureFiltersList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.filter"></a>

```typescript
public readonly filter: DataOciCoreCaptureFiltersFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList">DataOciCoreCaptureFiltersFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCoreCaptureFiltersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter">DataOciCoreCaptureFiltersFilter</a>[]

---

##### `filterTypeInput`<sup>Optional</sup> <a name="filterTypeInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.filterTypeInput"></a>

```typescript
public readonly filterTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreCaptureFiltersCaptureFilters <a name="DataOciCoreCaptureFiltersCaptureFilters" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFilters.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreCaptureFiltersCaptureFilters: dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFilters = { ... }
```


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRules <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRules" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRules.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRules: dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRules = { ... }
```


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptions <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptions.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptions: dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptions = { ... }
```


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptions <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptions.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptions: dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptions = { ... }
```


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange: dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange = { ... }
```


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRange <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRange.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRange: dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRange = { ... }
```


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptions <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptions.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptions: dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptions = { ... }
```


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange: dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange = { ... }
```


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRange <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRange.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRange: dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRange = { ... }
```


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRules <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRules" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRules.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRules: dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRules = { ... }
```


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptions <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptions.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptions: dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptions = { ... }
```


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptions <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptions.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptions: dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptions = { ... }
```


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRange <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRange.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRange: dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRange = { ... }
```


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRange <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRange.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRange: dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRange = { ... }
```


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptions <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptions.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptions: dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptions = { ... }
```


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRange <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRange.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRange: dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRange = { ... }
```


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRange <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRange.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRange: dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRange = { ... }
```


### DataOciCoreCaptureFiltersConfig <a name="DataOciCoreCaptureFiltersConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreCaptureFiltersConfig: dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#compartment_id DataOciCoreCaptureFilters#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#display_name DataOciCoreCaptureFilters#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter">DataOciCoreCaptureFiltersFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.filterType">filterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#filter_type DataOciCoreCaptureFilters#filter_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#id DataOciCoreCaptureFilters#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#state DataOciCoreCaptureFilters#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#compartment_id DataOciCoreCaptureFilters#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#display_name DataOciCoreCaptureFilters#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCoreCaptureFiltersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter">DataOciCoreCaptureFiltersFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#filter DataOciCoreCaptureFilters#filter}

---

##### `filterType`<sup>Optional</sup> <a name="filterType" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#filter_type DataOciCoreCaptureFilters#filter_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#id DataOciCoreCaptureFilters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#state DataOciCoreCaptureFilters#state}.

---

### DataOciCoreCaptureFiltersFilter <a name="DataOciCoreCaptureFiltersFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreCaptureFiltersFilter: dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#name DataOciCoreCaptureFilters#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#values DataOciCoreCaptureFilters#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#regex DataOciCoreCaptureFilters#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#name DataOciCoreCaptureFilters#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#values DataOciCoreCaptureFilters#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#regex DataOciCoreCaptureFilters#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.get"></a>

```typescript
public get(index: number): DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.type">type</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptions">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.type"></a>

```typescript
public readonly type: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptions">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptions</a>

---


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.get"></a>

```typescript
public get(index: number): DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.destinationCidr">destinationCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.flowLogType">flowLogType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.icmpOptions">icmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.ruleAction">ruleAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.samplingRate">samplingRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.sourceCidr">sourceCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.tcpOptions">tcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.udpOptions">udpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRules">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationCidr`<sup>Required</sup> <a name="destinationCidr" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.destinationCidr"></a>

```typescript
public readonly destinationCidr: string;
```

- *Type:* string

---

##### `flowLogType`<sup>Required</sup> <a name="flowLogType" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.flowLogType"></a>

```typescript
public readonly flowLogType: string;
```

- *Type:* string

---

##### `icmpOptions`<sup>Required</sup> <a name="icmpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.icmpOptions"></a>

```typescript
public readonly icmpOptions: DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList</a>

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `ruleAction`<sup>Required</sup> <a name="ruleAction" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.ruleAction"></a>

```typescript
public readonly ruleAction: string;
```

- *Type:* string

---

##### `samplingRate`<sup>Required</sup> <a name="samplingRate" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.samplingRate"></a>

```typescript
public readonly samplingRate: number;
```

- *Type:* number

---

##### `sourceCidr`<sup>Required</sup> <a name="sourceCidr" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.sourceCidr"></a>

```typescript
public readonly sourceCidr: string;
```

- *Type:* string

---

##### `tcpOptions`<sup>Required</sup> <a name="tcpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.tcpOptions"></a>

```typescript
public readonly tcpOptions: DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList</a>

---

##### `udpOptions`<sup>Required</sup> <a name="udpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.udpOptions"></a>

```typescript
public readonly udpOptions: DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRules">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRules</a>

---


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.get"></a>

```typescript
public get(index: number): DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange</a>

---


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.get"></a>

```typescript
public get(index: number): DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptions">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationPortRange`<sup>Required</sup> <a name="destinationPortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRange"></a>

```typescript
public readonly destinationPortRange: DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList</a>

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptions">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptions</a>

---


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.get"></a>

```typescript
public get(index: number): DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRange">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRange">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRange</a>

---


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.get"></a>

```typescript
public get(index: number): DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange</a>

---


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.get"></a>

```typescript
public get(index: number): DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptions">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationPortRange`<sup>Required</sup> <a name="destinationPortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRange"></a>

```typescript
public readonly destinationPortRange: DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList</a>

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptions">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptions</a>

---


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.get"></a>

```typescript
public get(index: number): DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRange">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRange">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRange</a>

---


### DataOciCoreCaptureFiltersCaptureFiltersList <a name="DataOciCoreCaptureFiltersCaptureFiltersList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.get"></a>

```typescript
public get(index: number): DataOciCoreCaptureFiltersCaptureFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreCaptureFiltersCaptureFiltersOutputReference <a name="DataOciCoreCaptureFiltersCaptureFiltersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.filterType">filterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.flowLogCaptureFilterRules">flowLogCaptureFilterRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.vtapCaptureFilterRules">vtapCaptureFilterRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFilters">DataOciCoreCaptureFiltersCaptureFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

---

##### `flowLogCaptureFilterRules`<sup>Required</sup> <a name="flowLogCaptureFilterRules" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.flowLogCaptureFilterRules"></a>

```typescript
public readonly flowLogCaptureFilterRules: DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `vtapCaptureFilterRules`<sup>Required</sup> <a name="vtapCaptureFilterRules" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.vtapCaptureFilterRules"></a>

```typescript
public readonly vtapCaptureFilterRules: DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreCaptureFiltersCaptureFilters;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFilters">DataOciCoreCaptureFiltersCaptureFilters</a>

---


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.get"></a>

```typescript
public get(index: number): DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.property.type">type</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptions">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.property.type"></a>

```typescript
public readonly type: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptions">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptions</a>

---


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.get"></a>

```typescript
public get(index: number): DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.destinationCidr">destinationCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.icmpOptions">icmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.ruleAction">ruleAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.sourceCidr">sourceCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.tcpOptions">tcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.trafficDirection">trafficDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.udpOptions">udpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRules">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationCidr`<sup>Required</sup> <a name="destinationCidr" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.destinationCidr"></a>

```typescript
public readonly destinationCidr: string;
```

- *Type:* string

---

##### `icmpOptions`<sup>Required</sup> <a name="icmpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.icmpOptions"></a>

```typescript
public readonly icmpOptions: DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList</a>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `ruleAction`<sup>Required</sup> <a name="ruleAction" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.ruleAction"></a>

```typescript
public readonly ruleAction: string;
```

- *Type:* string

---

##### `sourceCidr`<sup>Required</sup> <a name="sourceCidr" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.sourceCidr"></a>

```typescript
public readonly sourceCidr: string;
```

- *Type:* string

---

##### `tcpOptions`<sup>Required</sup> <a name="tcpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.tcpOptions"></a>

```typescript
public readonly tcpOptions: DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList</a>

---

##### `trafficDirection`<sup>Required</sup> <a name="trafficDirection" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.trafficDirection"></a>

```typescript
public readonly trafficDirection: string;
```

- *Type:* string

---

##### `udpOptions`<sup>Required</sup> <a name="udpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.udpOptions"></a>

```typescript
public readonly udpOptions: DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRules">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRules</a>

---


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.get"></a>

```typescript
public get(index: number): DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRange">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRange">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRange</a>

---


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.get"></a>

```typescript
public get(index: number): DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptions">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationPortRange`<sup>Required</sup> <a name="destinationPortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRange"></a>

```typescript
public readonly destinationPortRange: DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList</a>

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptions">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptions</a>

---


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.get"></a>

```typescript
public get(index: number): DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRange">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRange">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRange</a>

---


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.get"></a>

```typescript
public get(index: number): DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRange">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRange">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRange</a>

---


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.get"></a>

```typescript
public get(index: number): DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptions">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationPortRange`<sup>Required</sup> <a name="destinationPortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRange"></a>

```typescript
public readonly destinationPortRange: DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList</a>

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptions">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptions</a>

---


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.get"></a>

```typescript
public get(index: number): DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRange">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRange">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRange</a>

---


### DataOciCoreCaptureFiltersFilterList <a name="DataOciCoreCaptureFiltersFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.get"></a>

```typescript
public get(index: number): DataOciCoreCaptureFiltersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter">DataOciCoreCaptureFiltersFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreCaptureFiltersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter">DataOciCoreCaptureFiltersFilter</a>[]

---


### DataOciCoreCaptureFiltersFilterOutputReference <a name="DataOciCoreCaptureFiltersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCoreCaptureFilters } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter">DataOciCoreCaptureFiltersFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreCaptureFiltersFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter">DataOciCoreCaptureFiltersFilter</a>

---



