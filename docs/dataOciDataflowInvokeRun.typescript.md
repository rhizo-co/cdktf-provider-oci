# `dataOciDataflowInvokeRun` Submodule <a name="`dataOciDataflowInvokeRun` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataflowInvokeRun <a name="DataOciDataflowInvokeRun" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_run oci_dataflow_invoke_run}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.Initializer"></a>

```typescript
import { dataOciDataflowInvokeRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDataflowInvokeRun.DataOciDataflowInvokeRun(scope: Construct, id: string, config: DataOciDataflowInvokeRunConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig">DataOciDataflowInvokeRunConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig">DataOciDataflowInvokeRunConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataflowInvokeRun resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.isConstruct"></a>

```typescript
import { dataOciDataflowInvokeRun } from 'rhizo-co-terraform-provider-oci'

dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.isTerraformElement"></a>

```typescript
import { dataOciDataflowInvokeRun } from 'rhizo-co-terraform-provider-oci'

dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.isTerraformDataSource"></a>

```typescript
import { dataOciDataflowInvokeRun } from 'rhizo-co-terraform-provider-oci'

dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.generateConfigForImport"></a>

```typescript
import { dataOciDataflowInvokeRun } from 'rhizo-co-terraform-provider-oci'

dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataflowInvokeRun resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataflowInvokeRun to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataflowInvokeRun that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_run#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataflowInvokeRun to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.applicationLogConfig">applicationLogConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList">DataOciDataflowInvokeRunApplicationLogConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.archiveUri">archiveUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.arguments">arguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.asynchronous">asynchronous</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.className">className</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.configuration">configuration</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.dataReadInBytes">dataReadInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.dataWrittenInBytes">dataWrittenInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.driverShape">driverShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.driverShapeConfig">driverShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList">DataOciDataflowInvokeRunDriverShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.execute">execute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.executorShape">executorShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.executorShapeConfig">executorShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList">DataOciDataflowInvokeRunExecutorShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.fileUri">fileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.language">language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.logsBucketUri">logsBucketUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.maxDurationInMinutes">maxDurationInMinutes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.metastoreId">metastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.numExecutors">numExecutors</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.opcParentRptUrl">opcParentRptUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.opcRequestId">opcRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.ownerPrincipalId">ownerPrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.ownerUserName">ownerUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.parameters">parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList">DataOciDataflowInvokeRunParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.poolId">poolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.privateEndpointDnsZones">privateEndpointDnsZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.privateEndpointId">privateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.privateEndpointMaxHostCount">privateEndpointMaxHostCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.privateEndpointNsgIds">privateEndpointNsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.privateEndpointSubnetId">privateEndpointSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.runDurationInMilliseconds">runDurationInMilliseconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.sparkVersion">sparkVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.totalOcpu">totalOcpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.warehouseBucketUri">warehouseBucketUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.runIdInput">runIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.runId">runId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `applicationLogConfig`<sup>Required</sup> <a name="applicationLogConfig" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.applicationLogConfig"></a>

```typescript
public readonly applicationLogConfig: DataOciDataflowInvokeRunApplicationLogConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList">DataOciDataflowInvokeRunApplicationLogConfigList</a>

---

##### `archiveUri`<sup>Required</sup> <a name="archiveUri" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.archiveUri"></a>

```typescript
public readonly archiveUri: string;
```

- *Type:* string

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.arguments"></a>

```typescript
public readonly arguments: string[];
```

- *Type:* string[]

---

##### `asynchronous`<sup>Required</sup> <a name="asynchronous" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.asynchronous"></a>

```typescript
public readonly asynchronous: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `className`<sup>Required</sup> <a name="className" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.className"></a>

```typescript
public readonly className: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.configuration"></a>

```typescript
public readonly configuration: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `dataReadInBytes`<sup>Required</sup> <a name="dataReadInBytes" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.dataReadInBytes"></a>

```typescript
public readonly dataReadInBytes: string;
```

- *Type:* string

---

##### `dataWrittenInBytes`<sup>Required</sup> <a name="dataWrittenInBytes" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.dataWrittenInBytes"></a>

```typescript
public readonly dataWrittenInBytes: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `driverShape`<sup>Required</sup> <a name="driverShape" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.driverShape"></a>

```typescript
public readonly driverShape: string;
```

- *Type:* string

---

##### `driverShapeConfig`<sup>Required</sup> <a name="driverShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.driverShapeConfig"></a>

```typescript
public readonly driverShapeConfig: DataOciDataflowInvokeRunDriverShapeConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList">DataOciDataflowInvokeRunDriverShapeConfigList</a>

---

##### `execute`<sup>Required</sup> <a name="execute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.execute"></a>

```typescript
public readonly execute: string;
```

- *Type:* string

---

##### `executorShape`<sup>Required</sup> <a name="executorShape" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.executorShape"></a>

```typescript
public readonly executorShape: string;
```

- *Type:* string

---

##### `executorShapeConfig`<sup>Required</sup> <a name="executorShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.executorShapeConfig"></a>

```typescript
public readonly executorShapeConfig: DataOciDataflowInvokeRunExecutorShapeConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList">DataOciDataflowInvokeRunExecutorShapeConfigList</a>

---

##### `fileUri`<sup>Required</sup> <a name="fileUri" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.fileUri"></a>

```typescript
public readonly fileUri: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idleTimeoutInMinutes`<sup>Required</sup> <a name="idleTimeoutInMinutes" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.idleTimeoutInMinutes"></a>

```typescript
public readonly idleTimeoutInMinutes: string;
```

- *Type:* string

---

##### `language`<sup>Required</sup> <a name="language" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `logsBucketUri`<sup>Required</sup> <a name="logsBucketUri" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.logsBucketUri"></a>

```typescript
public readonly logsBucketUri: string;
```

- *Type:* string

---

##### `maxDurationInMinutes`<sup>Required</sup> <a name="maxDurationInMinutes" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.maxDurationInMinutes"></a>

```typescript
public readonly maxDurationInMinutes: string;
```

- *Type:* string

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.metastoreId"></a>

```typescript
public readonly metastoreId: string;
```

- *Type:* string

---

##### `numExecutors`<sup>Required</sup> <a name="numExecutors" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.numExecutors"></a>

```typescript
public readonly numExecutors: number;
```

- *Type:* number

---

##### `opcParentRptUrl`<sup>Required</sup> <a name="opcParentRptUrl" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.opcParentRptUrl"></a>

```typescript
public readonly opcParentRptUrl: string;
```

- *Type:* string

---

##### `opcRequestId`<sup>Required</sup> <a name="opcRequestId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.opcRequestId"></a>

```typescript
public readonly opcRequestId: string;
```

- *Type:* string

---

##### `ownerPrincipalId`<sup>Required</sup> <a name="ownerPrincipalId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.ownerPrincipalId"></a>

```typescript
public readonly ownerPrincipalId: string;
```

- *Type:* string

---

##### `ownerUserName`<sup>Required</sup> <a name="ownerUserName" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.ownerUserName"></a>

```typescript
public readonly ownerUserName: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.parameters"></a>

```typescript
public readonly parameters: DataOciDataflowInvokeRunParametersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList">DataOciDataflowInvokeRunParametersList</a>

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.poolId"></a>

```typescript
public readonly poolId: string;
```

- *Type:* string

---

##### `privateEndpointDnsZones`<sup>Required</sup> <a name="privateEndpointDnsZones" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.privateEndpointDnsZones"></a>

```typescript
public readonly privateEndpointDnsZones: string[];
```

- *Type:* string[]

---

##### `privateEndpointId`<sup>Required</sup> <a name="privateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.privateEndpointId"></a>

```typescript
public readonly privateEndpointId: string;
```

- *Type:* string

---

##### `privateEndpointMaxHostCount`<sup>Required</sup> <a name="privateEndpointMaxHostCount" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.privateEndpointMaxHostCount"></a>

```typescript
public readonly privateEndpointMaxHostCount: number;
```

- *Type:* number

---

##### `privateEndpointNsgIds`<sup>Required</sup> <a name="privateEndpointNsgIds" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.privateEndpointNsgIds"></a>

```typescript
public readonly privateEndpointNsgIds: string[];
```

- *Type:* string[]

---

##### `privateEndpointSubnetId`<sup>Required</sup> <a name="privateEndpointSubnetId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.privateEndpointSubnetId"></a>

```typescript
public readonly privateEndpointSubnetId: string;
```

- *Type:* string

---

##### `runDurationInMilliseconds`<sup>Required</sup> <a name="runDurationInMilliseconds" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.runDurationInMilliseconds"></a>

```typescript
public readonly runDurationInMilliseconds: string;
```

- *Type:* string

---

##### `sparkVersion`<sup>Required</sup> <a name="sparkVersion" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.sparkVersion"></a>

```typescript
public readonly sparkVersion: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `totalOcpu`<sup>Required</sup> <a name="totalOcpu" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.totalOcpu"></a>

```typescript
public readonly totalOcpu: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `warehouseBucketUri`<sup>Required</sup> <a name="warehouseBucketUri" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.warehouseBucketUri"></a>

```typescript
public readonly warehouseBucketUri: string;
```

- *Type:* string

---

##### `runIdInput`<sup>Optional</sup> <a name="runIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.runIdInput"></a>

```typescript
public readonly runIdInput: string;
```

- *Type:* string

---

##### `runId`<sup>Required</sup> <a name="runId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.runId"></a>

```typescript
public readonly runId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRun.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataflowInvokeRunApplicationLogConfig <a name="DataOciDataflowInvokeRunApplicationLogConfig" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfig.Initializer"></a>

```typescript
import { dataOciDataflowInvokeRun } from 'rhizo-co-terraform-provider-oci'

const dataOciDataflowInvokeRunApplicationLogConfig: dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfig = { ... }
```


### DataOciDataflowInvokeRunConfig <a name="DataOciDataflowInvokeRunConfig" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig.Initializer"></a>

```typescript
import { dataOciDataflowInvokeRun } from 'rhizo-co-terraform-provider-oci'

const dataOciDataflowInvokeRunConfig: dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig.property.runId">runId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_run#run_id DataOciDataflowInvokeRun#run_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `runId`<sup>Required</sup> <a name="runId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunConfig.property.runId"></a>

```typescript
public readonly runId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_invoke_run#run_id DataOciDataflowInvokeRun#run_id}.

---

### DataOciDataflowInvokeRunDriverShapeConfig <a name="DataOciDataflowInvokeRunDriverShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfig.Initializer"></a>

```typescript
import { dataOciDataflowInvokeRun } from 'rhizo-co-terraform-provider-oci'

const dataOciDataflowInvokeRunDriverShapeConfig: dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfig = { ... }
```


### DataOciDataflowInvokeRunExecutorShapeConfig <a name="DataOciDataflowInvokeRunExecutorShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfig.Initializer"></a>

```typescript
import { dataOciDataflowInvokeRun } from 'rhizo-co-terraform-provider-oci'

const dataOciDataflowInvokeRunExecutorShapeConfig: dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfig = { ... }
```


### DataOciDataflowInvokeRunParameters <a name="DataOciDataflowInvokeRunParameters" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParameters.Initializer"></a>

```typescript
import { dataOciDataflowInvokeRun } from 'rhizo-co-terraform-provider-oci'

const dataOciDataflowInvokeRunParameters: dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParameters = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataflowInvokeRunApplicationLogConfigList <a name="DataOciDataflowInvokeRunApplicationLogConfigList" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.Initializer"></a>

```typescript
import { dataOciDataflowInvokeRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.get"></a>

```typescript
public get(index: number): DataOciDataflowInvokeRunApplicationLogConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataflowInvokeRunApplicationLogConfigOutputReference <a name="DataOciDataflowInvokeRunApplicationLogConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.Initializer"></a>

```typescript
import { dataOciDataflowInvokeRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.property.logGroupId">logGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.property.logId">logId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfig">DataOciDataflowInvokeRunApplicationLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

---

##### `logId`<sup>Required</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.property.logId"></a>

```typescript
public readonly logId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataflowInvokeRunApplicationLogConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunApplicationLogConfig">DataOciDataflowInvokeRunApplicationLogConfig</a>

---


### DataOciDataflowInvokeRunDriverShapeConfigList <a name="DataOciDataflowInvokeRunDriverShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.Initializer"></a>

```typescript
import { dataOciDataflowInvokeRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.get"></a>

```typescript
public get(index: number): DataOciDataflowInvokeRunDriverShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataflowInvokeRunDriverShapeConfigOutputReference <a name="DataOciDataflowInvokeRunDriverShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.Initializer"></a>

```typescript
import { dataOciDataflowInvokeRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfig">DataOciDataflowInvokeRunDriverShapeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataflowInvokeRunDriverShapeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunDriverShapeConfig">DataOciDataflowInvokeRunDriverShapeConfig</a>

---


### DataOciDataflowInvokeRunExecutorShapeConfigList <a name="DataOciDataflowInvokeRunExecutorShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.Initializer"></a>

```typescript
import { dataOciDataflowInvokeRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.get"></a>

```typescript
public get(index: number): DataOciDataflowInvokeRunExecutorShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataflowInvokeRunExecutorShapeConfigOutputReference <a name="DataOciDataflowInvokeRunExecutorShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.Initializer"></a>

```typescript
import { dataOciDataflowInvokeRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfig">DataOciDataflowInvokeRunExecutorShapeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataflowInvokeRunExecutorShapeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunExecutorShapeConfig">DataOciDataflowInvokeRunExecutorShapeConfig</a>

---


### DataOciDataflowInvokeRunParametersList <a name="DataOciDataflowInvokeRunParametersList" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.Initializer"></a>

```typescript
import { dataOciDataflowInvokeRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.get"></a>

```typescript
public get(index: number): DataOciDataflowInvokeRunParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataflowInvokeRunParametersOutputReference <a name="DataOciDataflowInvokeRunParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.Initializer"></a>

```typescript
import { dataOciDataflowInvokeRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParameters">DataOciDataflowInvokeRunParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataflowInvokeRunParameters;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowInvokeRun.DataOciDataflowInvokeRunParameters">DataOciDataflowInvokeRunParameters</a>

---



