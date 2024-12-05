# `dataOciBdsBdsInstanceListOsPatches` Submodule <a name="`dataOciBdsBdsInstanceListOsPatches` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBdsBdsInstanceListOsPatches <a name="DataOciBdsBdsInstanceListOsPatches" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_list_os_patches oci_bds_bds_instance_list_os_patches}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.Initializer"></a>

```typescript
import { dataOciBdsBdsInstanceListOsPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches(scope: Construct, id: string, config: DataOciBdsBdsInstanceListOsPatchesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig">DataOciBdsBdsInstanceListOsPatchesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig">DataOciBdsBdsInstanceListOsPatchesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciBdsBdsInstanceListOsPatchesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilter">DataOciBdsBdsInstanceListOsPatchesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciBdsBdsInstanceListOsPatches resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.isConstruct"></a>

```typescript
import { dataOciBdsBdsInstanceListOsPatches } from 'rhizo-co-terraform-provider-oci'

dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.isTerraformElement"></a>

```typescript
import { dataOciBdsBdsInstanceListOsPatches } from 'rhizo-co-terraform-provider-oci'

dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.isTerraformDataSource"></a>

```typescript
import { dataOciBdsBdsInstanceListOsPatches } from 'rhizo-co-terraform-provider-oci'

dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.generateConfigForImport"></a>

```typescript
import { dataOciBdsBdsInstanceListOsPatches } from 'rhizo-co-terraform-provider-oci'

dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciBdsBdsInstanceListOsPatches resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciBdsBdsInstanceListOsPatches to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciBdsBdsInstanceListOsPatches that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_list_os_patches#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBdsBdsInstanceListOsPatches to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList">DataOciBdsBdsInstanceListOsPatchesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.osPatches">osPatches</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList">DataOciBdsBdsInstanceListOsPatchesOsPatchesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.bdsInstanceIdInput">bdsInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilter">DataOciBdsBdsInstanceListOsPatchesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.bdsInstanceId">bdsInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.filter"></a>

```typescript
public readonly filter: DataOciBdsBdsInstanceListOsPatchesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList">DataOciBdsBdsInstanceListOsPatchesFilterList</a>

---

##### `osPatches`<sup>Required</sup> <a name="osPatches" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.osPatches"></a>

```typescript
public readonly osPatches: DataOciBdsBdsInstanceListOsPatchesOsPatchesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList">DataOciBdsBdsInstanceListOsPatchesOsPatchesList</a>

---

##### `bdsInstanceIdInput`<sup>Optional</sup> <a name="bdsInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.bdsInstanceIdInput"></a>

```typescript
public readonly bdsInstanceIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciBdsBdsInstanceListOsPatchesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilter">DataOciBdsBdsInstanceListOsPatchesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.bdsInstanceId"></a>

```typescript
public readonly bdsInstanceId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBdsBdsInstanceListOsPatchesConfig <a name="DataOciBdsBdsInstanceListOsPatchesConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.Initializer"></a>

```typescript
import { dataOciBdsBdsInstanceListOsPatches } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsBdsInstanceListOsPatchesConfig: dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.bdsInstanceId">bdsInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_list_os_patches#bds_instance_id DataOciBdsBdsInstanceListOsPatches#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilter">DataOciBdsBdsInstanceListOsPatchesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_list_os_patches#id DataOciBdsBdsInstanceListOsPatches#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.bdsInstanceId"></a>

```typescript
public readonly bdsInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_list_os_patches#bds_instance_id DataOciBdsBdsInstanceListOsPatches#bds_instance_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciBdsBdsInstanceListOsPatchesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilter">DataOciBdsBdsInstanceListOsPatchesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_list_os_patches#filter DataOciBdsBdsInstanceListOsPatches#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_list_os_patches#id DataOciBdsBdsInstanceListOsPatches#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciBdsBdsInstanceListOsPatchesFilter <a name="DataOciBdsBdsInstanceListOsPatchesFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilter.Initializer"></a>

```typescript
import { dataOciBdsBdsInstanceListOsPatches } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsBdsInstanceListOsPatchesFilter: dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_list_os_patches#name DataOciBdsBdsInstanceListOsPatches#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_list_os_patches#values DataOciBdsBdsInstanceListOsPatches#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_list_os_patches#regex DataOciBdsBdsInstanceListOsPatches#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_list_os_patches#name DataOciBdsBdsInstanceListOsPatches#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_list_os_patches#values DataOciBdsBdsInstanceListOsPatches#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_list_os_patches#regex DataOciBdsBdsInstanceListOsPatches#regex}.

---

### DataOciBdsBdsInstanceListOsPatchesOsPatches <a name="DataOciBdsBdsInstanceListOsPatchesOsPatches" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatches"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatches.Initializer"></a>

```typescript
import { dataOciBdsBdsInstanceListOsPatches } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsBdsInstanceListOsPatchesOsPatches: dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatches = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciBdsBdsInstanceListOsPatchesFilterList <a name="DataOciBdsBdsInstanceListOsPatchesFilterList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.Initializer"></a>

```typescript
import { dataOciBdsBdsInstanceListOsPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.get"></a>

```typescript
public get(index: number): DataOciBdsBdsInstanceListOsPatchesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilter">DataOciBdsBdsInstanceListOsPatchesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciBdsBdsInstanceListOsPatchesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilter">DataOciBdsBdsInstanceListOsPatchesFilter</a>[]

---


### DataOciBdsBdsInstanceListOsPatchesFilterOutputReference <a name="DataOciBdsBdsInstanceListOsPatchesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciBdsBdsInstanceListOsPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilter">DataOciBdsBdsInstanceListOsPatchesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciBdsBdsInstanceListOsPatchesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilter">DataOciBdsBdsInstanceListOsPatchesFilter</a>

---


### DataOciBdsBdsInstanceListOsPatchesOsPatchesList <a name="DataOciBdsBdsInstanceListOsPatchesOsPatchesList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.Initializer"></a>

```typescript
import { dataOciBdsBdsInstanceListOsPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.get"></a>

```typescript
public get(index: number): DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference <a name="DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.Initializer"></a>

```typescript
import { dataOciBdsBdsInstanceListOsPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.property.bdsInstanceId">bdsInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.property.osPatchVersion">osPatchVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.property.releaseDate">releaseDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatches">DataOciBdsBdsInstanceListOsPatchesOsPatches</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.property.bdsInstanceId"></a>

```typescript
public readonly bdsInstanceId: string;
```

- *Type:* string

---

##### `osPatchVersion`<sup>Required</sup> <a name="osPatchVersion" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.property.osPatchVersion"></a>

```typescript
public readonly osPatchVersion: string;
```

- *Type:* string

---

##### `releaseDate`<sup>Required</sup> <a name="releaseDate" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.property.releaseDate"></a>

```typescript
public readonly releaseDate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBdsBdsInstanceListOsPatchesOsPatches;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatches">DataOciBdsBdsInstanceListOsPatchesOsPatches</a>

---



