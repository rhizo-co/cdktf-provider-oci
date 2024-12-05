# `dataOciBdsBdsInstanceGetOsPatch` Submodule <a name="`dataOciBdsBdsInstanceGetOsPatch` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBdsBdsInstanceGetOsPatch <a name="DataOciBdsBdsInstanceGetOsPatch" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch oci_bds_bds_instance_get_os_patch}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer"></a>

```typescript
import { dataOciBdsBdsInstanceGetOsPatch } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch(scope: Construct, id: string, config: DataOciBdsBdsInstanceGetOsPatchConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig">DataOciBdsBdsInstanceGetOsPatchConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig">DataOciBdsBdsInstanceGetOsPatchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciBdsBdsInstanceGetOsPatchFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter">DataOciBdsBdsInstanceGetOsPatchFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciBdsBdsInstanceGetOsPatch resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isConstruct"></a>

```typescript
import { dataOciBdsBdsInstanceGetOsPatch } from 'rhizo-co-terraform-provider-oci'

dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isTerraformElement"></a>

```typescript
import { dataOciBdsBdsInstanceGetOsPatch } from 'rhizo-co-terraform-provider-oci'

dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isTerraformDataSource"></a>

```typescript
import { dataOciBdsBdsInstanceGetOsPatch } from 'rhizo-co-terraform-provider-oci'

dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.generateConfigForImport"></a>

```typescript
import { dataOciBdsBdsInstanceGetOsPatch } from 'rhizo-co-terraform-provider-oci'

dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciBdsBdsInstanceGetOsPatch resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciBdsBdsInstanceGetOsPatch to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciBdsBdsInstanceGetOsPatch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBdsBdsInstanceGetOsPatch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList">DataOciBdsBdsInstanceGetOsPatchFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.minBdsVersion">minBdsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.minCompatibleOdhVersionMap">minCompatibleOdhVersionMap</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.patchType">patchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.releaseDate">releaseDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.targetPackages">targetPackages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList">DataOciBdsBdsInstanceGetOsPatchTargetPackagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.bdsInstanceIdInput">bdsInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter">DataOciBdsBdsInstanceGetOsPatchFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.osPatchVersionInput">osPatchVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.bdsInstanceId">bdsInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.osPatchVersion">osPatchVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.filter"></a>

```typescript
public readonly filter: DataOciBdsBdsInstanceGetOsPatchFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList">DataOciBdsBdsInstanceGetOsPatchFilterList</a>

---

##### `minBdsVersion`<sup>Required</sup> <a name="minBdsVersion" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.minBdsVersion"></a>

```typescript
public readonly minBdsVersion: string;
```

- *Type:* string

---

##### `minCompatibleOdhVersionMap`<sup>Required</sup> <a name="minCompatibleOdhVersionMap" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.minCompatibleOdhVersionMap"></a>

```typescript
public readonly minCompatibleOdhVersionMap: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `patchType`<sup>Required</sup> <a name="patchType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.patchType"></a>

```typescript
public readonly patchType: string;
```

- *Type:* string

---

##### `releaseDate`<sup>Required</sup> <a name="releaseDate" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.releaseDate"></a>

```typescript
public readonly releaseDate: string;
```

- *Type:* string

---

##### `targetPackages`<sup>Required</sup> <a name="targetPackages" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.targetPackages"></a>

```typescript
public readonly targetPackages: DataOciBdsBdsInstanceGetOsPatchTargetPackagesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList">DataOciBdsBdsInstanceGetOsPatchTargetPackagesList</a>

---

##### `bdsInstanceIdInput`<sup>Optional</sup> <a name="bdsInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.bdsInstanceIdInput"></a>

```typescript
public readonly bdsInstanceIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciBdsBdsInstanceGetOsPatchFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter">DataOciBdsBdsInstanceGetOsPatchFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `osPatchVersionInput`<sup>Optional</sup> <a name="osPatchVersionInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.osPatchVersionInput"></a>

```typescript
public readonly osPatchVersionInput: string;
```

- *Type:* string

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.bdsInstanceId"></a>

```typescript
public readonly bdsInstanceId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `osPatchVersion`<sup>Required</sup> <a name="osPatchVersion" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.osPatchVersion"></a>

```typescript
public readonly osPatchVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBdsBdsInstanceGetOsPatchConfig <a name="DataOciBdsBdsInstanceGetOsPatchConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.Initializer"></a>

```typescript
import { dataOciBdsBdsInstanceGetOsPatch } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsBdsInstanceGetOsPatchConfig: dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.bdsInstanceId">bdsInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#bds_instance_id DataOciBdsBdsInstanceGetOsPatch#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.osPatchVersion">osPatchVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#os_patch_version DataOciBdsBdsInstanceGetOsPatch#os_patch_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter">DataOciBdsBdsInstanceGetOsPatchFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#id DataOciBdsBdsInstanceGetOsPatch#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.bdsInstanceId"></a>

```typescript
public readonly bdsInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#bds_instance_id DataOciBdsBdsInstanceGetOsPatch#bds_instance_id}.

---

##### `osPatchVersion`<sup>Required</sup> <a name="osPatchVersion" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.osPatchVersion"></a>

```typescript
public readonly osPatchVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#os_patch_version DataOciBdsBdsInstanceGetOsPatch#os_patch_version}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciBdsBdsInstanceGetOsPatchFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter">DataOciBdsBdsInstanceGetOsPatchFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#filter DataOciBdsBdsInstanceGetOsPatch#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#id DataOciBdsBdsInstanceGetOsPatch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciBdsBdsInstanceGetOsPatchFilter <a name="DataOciBdsBdsInstanceGetOsPatchFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter.Initializer"></a>

```typescript
import { dataOciBdsBdsInstanceGetOsPatch } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsBdsInstanceGetOsPatchFilter: dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#name DataOciBdsBdsInstanceGetOsPatch#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#values DataOciBdsBdsInstanceGetOsPatch#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#regex DataOciBdsBdsInstanceGetOsPatch#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#name DataOciBdsBdsInstanceGetOsPatch#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#values DataOciBdsBdsInstanceGetOsPatch#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#regex DataOciBdsBdsInstanceGetOsPatch#regex}.

---

### DataOciBdsBdsInstanceGetOsPatchTargetPackages <a name="DataOciBdsBdsInstanceGetOsPatchTargetPackages" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackages.Initializer"></a>

```typescript
import { dataOciBdsBdsInstanceGetOsPatch } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsBdsInstanceGetOsPatchTargetPackages: dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackages = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciBdsBdsInstanceGetOsPatchFilterList <a name="DataOciBdsBdsInstanceGetOsPatchFilterList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.Initializer"></a>

```typescript
import { dataOciBdsBdsInstanceGetOsPatch } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.get"></a>

```typescript
public get(index: number): DataOciBdsBdsInstanceGetOsPatchFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter">DataOciBdsBdsInstanceGetOsPatchFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciBdsBdsInstanceGetOsPatchFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter">DataOciBdsBdsInstanceGetOsPatchFilter</a>[]

---


### DataOciBdsBdsInstanceGetOsPatchFilterOutputReference <a name="DataOciBdsBdsInstanceGetOsPatchFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer"></a>

```typescript
import { dataOciBdsBdsInstanceGetOsPatch } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter">DataOciBdsBdsInstanceGetOsPatchFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciBdsBdsInstanceGetOsPatchFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter">DataOciBdsBdsInstanceGetOsPatchFilter</a>

---


### DataOciBdsBdsInstanceGetOsPatchTargetPackagesList <a name="DataOciBdsBdsInstanceGetOsPatchTargetPackagesList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.Initializer"></a>

```typescript
import { dataOciBdsBdsInstanceGetOsPatch } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.get"></a>

```typescript
public get(index: number): DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference <a name="DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer"></a>

```typescript
import { dataOciBdsBdsInstanceGetOsPatch } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.packageName">packageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.relatedCvEs">relatedCvEs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.targetVersion">targetVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.updateType">updateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackages">DataOciBdsBdsInstanceGetOsPatchTargetPackages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

---

##### `relatedCvEs`<sup>Required</sup> <a name="relatedCvEs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.relatedCvEs"></a>

```typescript
public readonly relatedCvEs: string[];
```

- *Type:* string[]

---

##### `targetVersion`<sup>Required</sup> <a name="targetVersion" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.targetVersion"></a>

```typescript
public readonly targetVersion: string;
```

- *Type:* string

---

##### `updateType`<sup>Required</sup> <a name="updateType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.updateType"></a>

```typescript
public readonly updateType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBdsBdsInstanceGetOsPatchTargetPackages;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackages">DataOciBdsBdsInstanceGetOsPatchTargetPackages</a>

---



