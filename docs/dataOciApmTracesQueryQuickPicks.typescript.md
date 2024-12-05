# `dataOciApmTracesQueryQuickPicks` Submodule <a name="`dataOciApmTracesQueryQuickPicks` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmTracesQueryQuickPicks <a name="DataOciApmTracesQueryQuickPicks" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks oci_apm_traces_query_quick_picks}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer"></a>

```typescript
import { dataOciApmTracesQueryQuickPicks } from 'rhizo-co-terraform-provider-oci'

new dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks(scope: Construct, id: string, config: DataOciApmTracesQueryQuickPicksConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig">DataOciApmTracesQueryQuickPicksConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig">DataOciApmTracesQueryQuickPicksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciApmTracesQueryQuickPicksFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter">DataOciApmTracesQueryQuickPicksFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciApmTracesQueryQuickPicks resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.isConstruct"></a>

```typescript
import { dataOciApmTracesQueryQuickPicks } from 'rhizo-co-terraform-provider-oci'

dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.isTerraformElement"></a>

```typescript
import { dataOciApmTracesQueryQuickPicks } from 'rhizo-co-terraform-provider-oci'

dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.isTerraformDataSource"></a>

```typescript
import { dataOciApmTracesQueryQuickPicks } from 'rhizo-co-terraform-provider-oci'

dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.generateConfigForImport"></a>

```typescript
import { dataOciApmTracesQueryQuickPicks } from 'rhizo-co-terraform-provider-oci'

dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciApmTracesQueryQuickPicks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciApmTracesQueryQuickPicks to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciApmTracesQueryQuickPicks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmTracesQueryQuickPicks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList">DataOciApmTracesQueryQuickPicksFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.quickPicks">quickPicks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList">DataOciApmTracesQueryQuickPicksQuickPicksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.apmDomainIdInput">apmDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter">DataOciApmTracesQueryQuickPicksFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.apmDomainId">apmDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.filter"></a>

```typescript
public readonly filter: DataOciApmTracesQueryQuickPicksFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList">DataOciApmTracesQueryQuickPicksFilterList</a>

---

##### `quickPicks`<sup>Required</sup> <a name="quickPicks" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.quickPicks"></a>

```typescript
public readonly quickPicks: DataOciApmTracesQueryQuickPicksQuickPicksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList">DataOciApmTracesQueryQuickPicksQuickPicksList</a>

---

##### `apmDomainIdInput`<sup>Optional</sup> <a name="apmDomainIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.apmDomainIdInput"></a>

```typescript
public readonly apmDomainIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciApmTracesQueryQuickPicksFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter">DataOciApmTracesQueryQuickPicksFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.apmDomainId"></a>

```typescript
public readonly apmDomainId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicks.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmTracesQueryQuickPicksConfig <a name="DataOciApmTracesQueryQuickPicksConfig" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.Initializer"></a>

```typescript
import { dataOciApmTracesQueryQuickPicks } from 'rhizo-co-terraform-provider-oci'

const dataOciApmTracesQueryQuickPicksConfig: dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.apmDomainId">apmDomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#apm_domain_id DataOciApmTracesQueryQuickPicks#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter">DataOciApmTracesQueryQuickPicksFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#id DataOciApmTracesQueryQuickPicks#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.apmDomainId"></a>

```typescript
public readonly apmDomainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#apm_domain_id DataOciApmTracesQueryQuickPicks#apm_domain_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciApmTracesQueryQuickPicksFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter">DataOciApmTracesQueryQuickPicksFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#filter DataOciApmTracesQueryQuickPicks#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#id DataOciApmTracesQueryQuickPicks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciApmTracesQueryQuickPicksFilter <a name="DataOciApmTracesQueryQuickPicksFilter" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter.Initializer"></a>

```typescript
import { dataOciApmTracesQueryQuickPicks } from 'rhizo-co-terraform-provider-oci'

const dataOciApmTracesQueryQuickPicksFilter: dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#name DataOciApmTracesQueryQuickPicks#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#values DataOciApmTracesQueryQuickPicks#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#regex DataOciApmTracesQueryQuickPicks#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#name DataOciApmTracesQueryQuickPicks#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#values DataOciApmTracesQueryQuickPicks#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_query_quick_picks#regex DataOciApmTracesQueryQuickPicks#regex}.

---

### DataOciApmTracesQueryQuickPicksQuickPicks <a name="DataOciApmTracesQueryQuickPicksQuickPicks" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicks.Initializer"></a>

```typescript
import { dataOciApmTracesQueryQuickPicks } from 'rhizo-co-terraform-provider-oci'

const dataOciApmTracesQueryQuickPicksQuickPicks: dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicks = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApmTracesQueryQuickPicksFilterList <a name="DataOciApmTracesQueryQuickPicksFilterList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.Initializer"></a>

```typescript
import { dataOciApmTracesQueryQuickPicks } from 'rhizo-co-terraform-provider-oci'

new dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.get"></a>

```typescript
public get(index: number): DataOciApmTracesQueryQuickPicksFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter">DataOciApmTracesQueryQuickPicksFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciApmTracesQueryQuickPicksFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter">DataOciApmTracesQueryQuickPicksFilter</a>[]

---


### DataOciApmTracesQueryQuickPicksFilterOutputReference <a name="DataOciApmTracesQueryQuickPicksFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.Initializer"></a>

```typescript
import { dataOciApmTracesQueryQuickPicks } from 'rhizo-co-terraform-provider-oci'

new dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter">DataOciApmTracesQueryQuickPicksFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciApmTracesQueryQuickPicksFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksFilter">DataOciApmTracesQueryQuickPicksFilter</a>

---


### DataOciApmTracesQueryQuickPicksQuickPicksList <a name="DataOciApmTracesQueryQuickPicksQuickPicksList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.Initializer"></a>

```typescript
import { dataOciApmTracesQueryQuickPicks } from 'rhizo-co-terraform-provider-oci'

new dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.get"></a>

```typescript
public get(index: number): DataOciApmTracesQueryQuickPicksQuickPicksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmTracesQueryQuickPicksQuickPicksOutputReference <a name="DataOciApmTracesQueryQuickPicksQuickPicksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.Initializer"></a>

```typescript
import { dataOciApmTracesQueryQuickPicks } from 'rhizo-co-terraform-provider-oci'

new dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.property.quickPickName">quickPickName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.property.quickPickQuery">quickPickQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicks">DataOciApmTracesQueryQuickPicksQuickPicks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `quickPickName`<sup>Required</sup> <a name="quickPickName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.property.quickPickName"></a>

```typescript
public readonly quickPickName: string;
```

- *Type:* string

---

##### `quickPickQuery`<sup>Required</sup> <a name="quickPickQuery" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.property.quickPickQuery"></a>

```typescript
public readonly quickPickQuery: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmTracesQueryQuickPicksQuickPicks;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesQueryQuickPicks.DataOciApmTracesQueryQuickPicksQuickPicks">DataOciApmTracesQueryQuickPicksQuickPicks</a>

---



