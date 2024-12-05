# `dataOciStreamingConnectHarnesses` Submodule <a name="`dataOciStreamingConnectHarnesses` Submodule" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciStreamingConnectHarnesses <a name="DataOciStreamingConnectHarnesses" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/streaming_connect_harnesses oci_streaming_connect_harnesses}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.Initializer"></a>

```typescript
import { dataOciStreamingConnectHarnesses } from 'rhizo-co-terraform-provider-oci'

new dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses(scope: Construct, id: string, config: DataOciStreamingConnectHarnessesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConfig">DataOciStreamingConnectHarnessesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConfig">DataOciStreamingConnectHarnessesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciStreamingConnectHarnessesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilter">DataOciStreamingConnectHarnessesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.resetName"></a>

```typescript
public resetName(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciStreamingConnectHarnesses resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.isConstruct"></a>

```typescript
import { dataOciStreamingConnectHarnesses } from 'rhizo-co-terraform-provider-oci'

dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.isTerraformElement"></a>

```typescript
import { dataOciStreamingConnectHarnesses } from 'rhizo-co-terraform-provider-oci'

dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.isTerraformDataSource"></a>

```typescript
import { dataOciStreamingConnectHarnesses } from 'rhizo-co-terraform-provider-oci'

dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.generateConfigForImport"></a>

```typescript
import { dataOciStreamingConnectHarnesses } from 'rhizo-co-terraform-provider-oci'

dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciStreamingConnectHarnesses resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciStreamingConnectHarnesses to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciStreamingConnectHarnesses that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/streaming_connect_harnesses#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciStreamingConnectHarnesses to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.connectHarness">connectHarness</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessList">DataOciStreamingConnectHarnessesConnectHarnessList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterList">DataOciStreamingConnectHarnessesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilter">DataOciStreamingConnectHarnessesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `connectHarness`<sup>Required</sup> <a name="connectHarness" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.connectHarness"></a>

```typescript
public readonly connectHarness: DataOciStreamingConnectHarnessesConnectHarnessList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessList">DataOciStreamingConnectHarnessesConnectHarnessList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.filter"></a>

```typescript
public readonly filter: DataOciStreamingConnectHarnessesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterList">DataOciStreamingConnectHarnessesFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciStreamingConnectHarnessesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilter">DataOciStreamingConnectHarnessesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnesses.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciStreamingConnectHarnessesConfig <a name="DataOciStreamingConnectHarnessesConfig" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConfig.Initializer"></a>

```typescript
import { dataOciStreamingConnectHarnesses } from 'rhizo-co-terraform-provider-oci'

const dataOciStreamingConnectHarnessesConfig: dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/streaming_connect_harnesses#compartment_id DataOciStreamingConnectHarnesses#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilter">DataOciStreamingConnectHarnessesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/streaming_connect_harnesses#id DataOciStreamingConnectHarnesses#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/streaming_connect_harnesses#name DataOciStreamingConnectHarnesses#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/streaming_connect_harnesses#state DataOciStreamingConnectHarnesses#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/streaming_connect_harnesses#compartment_id DataOciStreamingConnectHarnesses#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciStreamingConnectHarnessesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilter">DataOciStreamingConnectHarnessesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/streaming_connect_harnesses#filter DataOciStreamingConnectHarnesses#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/streaming_connect_harnesses#id DataOciStreamingConnectHarnesses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/streaming_connect_harnesses#name DataOciStreamingConnectHarnesses#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/streaming_connect_harnesses#state DataOciStreamingConnectHarnesses#state}.

---

### DataOciStreamingConnectHarnessesConnectHarness <a name="DataOciStreamingConnectHarnessesConnectHarness" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarness"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarness.Initializer"></a>

```typescript
import { dataOciStreamingConnectHarnesses } from 'rhizo-co-terraform-provider-oci'

const dataOciStreamingConnectHarnessesConnectHarness: dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarness = { ... }
```


### DataOciStreamingConnectHarnessesFilter <a name="DataOciStreamingConnectHarnessesFilter" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilter.Initializer"></a>

```typescript
import { dataOciStreamingConnectHarnesses } from 'rhizo-co-terraform-provider-oci'

const dataOciStreamingConnectHarnessesFilter: dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/streaming_connect_harnesses#name DataOciStreamingConnectHarnesses#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/streaming_connect_harnesses#values DataOciStreamingConnectHarnesses#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/streaming_connect_harnesses#regex DataOciStreamingConnectHarnesses#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/streaming_connect_harnesses#name DataOciStreamingConnectHarnesses#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/streaming_connect_harnesses#values DataOciStreamingConnectHarnesses#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/streaming_connect_harnesses#regex DataOciStreamingConnectHarnesses#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciStreamingConnectHarnessesConnectHarnessList <a name="DataOciStreamingConnectHarnessesConnectHarnessList" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessList.Initializer"></a>

```typescript
import { dataOciStreamingConnectHarnesses } from 'rhizo-co-terraform-provider-oci'

new dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessList.get"></a>

```typescript
public get(index: number): DataOciStreamingConnectHarnessesConnectHarnessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciStreamingConnectHarnessesConnectHarnessOutputReference <a name="DataOciStreamingConnectHarnessesConnectHarnessOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.Initializer"></a>

```typescript
import { dataOciStreamingConnectHarnesses } from 'rhizo-co-terraform-provider-oci'

new dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.property.lifecycleStateDetails">lifecycleStateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarness">DataOciStreamingConnectHarnessesConnectHarness</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleStateDetails`<sup>Required</sup> <a name="lifecycleStateDetails" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.property.lifecycleStateDetails"></a>

```typescript
public readonly lifecycleStateDetails: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarnessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciStreamingConnectHarnessesConnectHarness;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesConnectHarness">DataOciStreamingConnectHarnessesConnectHarness</a>

---


### DataOciStreamingConnectHarnessesFilterList <a name="DataOciStreamingConnectHarnessesFilterList" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterList.Initializer"></a>

```typescript
import { dataOciStreamingConnectHarnesses } from 'rhizo-co-terraform-provider-oci'

new dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterList.get"></a>

```typescript
public get(index: number): DataOciStreamingConnectHarnessesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilter">DataOciStreamingConnectHarnessesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciStreamingConnectHarnessesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilter">DataOciStreamingConnectHarnessesFilter</a>[]

---


### DataOciStreamingConnectHarnessesFilterOutputReference <a name="DataOciStreamingConnectHarnessesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciStreamingConnectHarnesses } from 'rhizo-co-terraform-provider-oci'

new dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilter">DataOciStreamingConnectHarnessesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciStreamingConnectHarnessesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciStreamingConnectHarnesses.DataOciStreamingConnectHarnessesFilter">DataOciStreamingConnectHarnessesFilter</a>

---



