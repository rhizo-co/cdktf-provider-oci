# `dataOciDevopsRepositoryMirrorRecords` Submodule <a name="`dataOciDevopsRepositoryMirrorRecords` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsRepositoryMirrorRecords <a name="DataOciDevopsRepositoryMirrorRecords" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirror_records oci_devops_repository_mirror_records}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryMirrorRecords } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords(scope: Construct, id: string, config: DataOciDevopsRepositoryMirrorRecordsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsConfig">DataOciDevopsRepositoryMirrorRecordsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsConfig">DataOciDevopsRepositoryMirrorRecordsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDevopsRepositoryMirrorRecordsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilter">DataOciDevopsRepositoryMirrorRecordsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDevopsRepositoryMirrorRecords resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.isConstruct"></a>

```typescript
import { dataOciDevopsRepositoryMirrorRecords } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.isTerraformElement"></a>

```typescript
import { dataOciDevopsRepositoryMirrorRecords } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.isTerraformDataSource"></a>

```typescript
import { dataOciDevopsRepositoryMirrorRecords } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.generateConfigForImport"></a>

```typescript
import { dataOciDevopsRepositoryMirrorRecords } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDevopsRepositoryMirrorRecords resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDevopsRepositoryMirrorRecords to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDevopsRepositoryMirrorRecords that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirror_records#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsRepositoryMirrorRecords to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterList">DataOciDevopsRepositoryMirrorRecordsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.repositoryMirrorRecordCollection">repositoryMirrorRecordCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionList">DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilter">DataOciDevopsRepositoryMirrorRecordsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.repositoryIdInput">repositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.repositoryId">repositoryId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.filter"></a>

```typescript
public readonly filter: DataOciDevopsRepositoryMirrorRecordsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterList">DataOciDevopsRepositoryMirrorRecordsFilterList</a>

---

##### `repositoryMirrorRecordCollection`<sup>Required</sup> <a name="repositoryMirrorRecordCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.repositoryMirrorRecordCollection"></a>

```typescript
public readonly repositoryMirrorRecordCollection: DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionList">DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDevopsRepositoryMirrorRecordsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilter">DataOciDevopsRepositoryMirrorRecordsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.repositoryIdInput"></a>

```typescript
public readonly repositoryIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecords.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsRepositoryMirrorRecordsConfig <a name="DataOciDevopsRepositoryMirrorRecordsConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsConfig.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryMirrorRecords } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsRepositoryMirrorRecordsConfig: dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsConfig.property.repositoryId">repositoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirror_records#repository_id DataOciDevopsRepositoryMirrorRecords#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilter">DataOciDevopsRepositoryMirrorRecordsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirror_records#id DataOciDevopsRepositoryMirrorRecords#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsConfig.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirror_records#repository_id DataOciDevopsRepositoryMirrorRecords#repository_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDevopsRepositoryMirrorRecordsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilter">DataOciDevopsRepositoryMirrorRecordsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirror_records#filter DataOciDevopsRepositoryMirrorRecords#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirror_records#id DataOciDevopsRepositoryMirrorRecords#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDevopsRepositoryMirrorRecordsFilter <a name="DataOciDevopsRepositoryMirrorRecordsFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilter.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryMirrorRecords } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsRepositoryMirrorRecordsFilter: dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirror_records#name DataOciDevopsRepositoryMirrorRecords#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirror_records#values DataOciDevopsRepositoryMirrorRecords#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirror_records#regex DataOciDevopsRepositoryMirrorRecords#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirror_records#name DataOciDevopsRepositoryMirrorRecords#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirror_records#values DataOciDevopsRepositoryMirrorRecords#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirror_records#regex DataOciDevopsRepositoryMirrorRecords#regex}.

---

### DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollection <a name="DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollection.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryMirrorRecords } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollection: dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollection = { ... }
```


### DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItems <a name="DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItems.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryMirrorRecords } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItems: dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsRepositoryMirrorRecordsFilterList <a name="DataOciDevopsRepositoryMirrorRecordsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterList.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryMirrorRecords } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterList.get"></a>

```typescript
public get(index: number): DataOciDevopsRepositoryMirrorRecordsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilter">DataOciDevopsRepositoryMirrorRecordsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDevopsRepositoryMirrorRecordsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilter">DataOciDevopsRepositoryMirrorRecordsFilter</a>[]

---


### DataOciDevopsRepositoryMirrorRecordsFilterOutputReference <a name="DataOciDevopsRepositoryMirrorRecordsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryMirrorRecords } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilter">DataOciDevopsRepositoryMirrorRecordsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDevopsRepositoryMirrorRecordsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsFilter">DataOciDevopsRepositoryMirrorRecordsFilter</a>

---


### DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsList <a name="DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryMirrorRecords } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference <a name="DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryMirrorRecords } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.property.mirrorStatus">mirrorStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.property.timeCompleted">timeCompleted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.property.timeEnqueued">timeEnqueued</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.property.workRequestId">workRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItems">DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `mirrorStatus`<sup>Required</sup> <a name="mirrorStatus" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.property.mirrorStatus"></a>

```typescript
public readonly mirrorStatus: string;
```

- *Type:* string

---

##### `timeCompleted`<sup>Required</sup> <a name="timeCompleted" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.property.timeCompleted"></a>

```typescript
public readonly timeCompleted: string;
```

- *Type:* string

---

##### `timeEnqueued`<sup>Required</sup> <a name="timeEnqueued" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.property.timeEnqueued"></a>

```typescript
public readonly timeEnqueued: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `workRequestId`<sup>Required</sup> <a name="workRequestId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.property.workRequestId"></a>

```typescript
public readonly workRequestId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItems">DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItems</a>

---


### DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionList <a name="DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionList.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryMirrorRecords } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionList.get"></a>

```typescript
public get(index: number): DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference <a name="DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryMirrorRecords } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsList">DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollection">DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsList">DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorRecords.DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollection">DataOciDevopsRepositoryMirrorRecordsRepositoryMirrorRecordCollection</a>

---



