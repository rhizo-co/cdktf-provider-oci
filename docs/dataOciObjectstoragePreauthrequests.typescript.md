# `dataOciObjectstoragePreauthrequests` Submodule <a name="`dataOciObjectstoragePreauthrequests` Submodule" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciObjectstoragePreauthrequests <a name="DataOciObjectstoragePreauthrequests" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests oci_objectstorage_preauthrequests}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer"></a>

```typescript
import { dataOciObjectstoragePreauthrequests } from 'rhizo-co-terraform-provider-oci'

new dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests(scope: Construct, id: string, config: DataOciObjectstoragePreauthrequestsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig">DataOciObjectstoragePreauthrequestsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig">DataOciObjectstoragePreauthrequestsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.resetObjectNamePrefix">resetObjectNamePrefix</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciObjectstoragePreauthrequestsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter">DataOciObjectstoragePreauthrequestsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.resetId"></a>

```typescript
public resetId(): void
```

##### `resetObjectNamePrefix` <a name="resetObjectNamePrefix" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.resetObjectNamePrefix"></a>

```typescript
public resetObjectNamePrefix(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciObjectstoragePreauthrequests resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.isConstruct"></a>

```typescript
import { dataOciObjectstoragePreauthrequests } from 'rhizo-co-terraform-provider-oci'

dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.isTerraformElement"></a>

```typescript
import { dataOciObjectstoragePreauthrequests } from 'rhizo-co-terraform-provider-oci'

dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.isTerraformDataSource"></a>

```typescript
import { dataOciObjectstoragePreauthrequests } from 'rhizo-co-terraform-provider-oci'

dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.generateConfigForImport"></a>

```typescript
import { dataOciObjectstoragePreauthrequests } from 'rhizo-co-terraform-provider-oci'

dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciObjectstoragePreauthrequests resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciObjectstoragePreauthrequests to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciObjectstoragePreauthrequests that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciObjectstoragePreauthrequests to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList">DataOciObjectstoragePreauthrequestsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.preauthenticatedRequests">preauthenticatedRequests</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList">DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter">DataOciObjectstoragePreauthrequestsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.objectNamePrefixInput">objectNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.objectNamePrefix">objectNamePrefix</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.filter"></a>

```typescript
public readonly filter: DataOciObjectstoragePreauthrequestsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList">DataOciObjectstoragePreauthrequestsFilterList</a>

---

##### `preauthenticatedRequests`<sup>Required</sup> <a name="preauthenticatedRequests" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.preauthenticatedRequests"></a>

```typescript
public readonly preauthenticatedRequests: DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList">DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciObjectstoragePreauthrequestsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter">DataOciObjectstoragePreauthrequestsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `objectNamePrefixInput`<sup>Optional</sup> <a name="objectNamePrefixInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.objectNamePrefixInput"></a>

```typescript
public readonly objectNamePrefixInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `objectNamePrefix`<sup>Required</sup> <a name="objectNamePrefix" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.objectNamePrefix"></a>

```typescript
public readonly objectNamePrefix: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciObjectstoragePreauthrequestsConfig <a name="DataOciObjectstoragePreauthrequestsConfig" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.Initializer"></a>

```typescript
import { dataOciObjectstoragePreauthrequests } from 'rhizo-co-terraform-provider-oci'

const dataOciObjectstoragePreauthrequestsConfig: dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#bucket DataOciObjectstoragePreauthrequests#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#namespace DataOciObjectstoragePreauthrequests#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter">DataOciObjectstoragePreauthrequestsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#id DataOciObjectstoragePreauthrequests#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.objectNamePrefix">objectNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#object_name_prefix DataOciObjectstoragePreauthrequests#object_name_prefix}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#bucket DataOciObjectstoragePreauthrequests#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#namespace DataOciObjectstoragePreauthrequests#namespace}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciObjectstoragePreauthrequestsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter">DataOciObjectstoragePreauthrequestsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#filter DataOciObjectstoragePreauthrequests#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#id DataOciObjectstoragePreauthrequests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `objectNamePrefix`<sup>Optional</sup> <a name="objectNamePrefix" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.objectNamePrefix"></a>

```typescript
public readonly objectNamePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#object_name_prefix DataOciObjectstoragePreauthrequests#object_name_prefix}.

---

### DataOciObjectstoragePreauthrequestsFilter <a name="DataOciObjectstoragePreauthrequestsFilter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter.Initializer"></a>

```typescript
import { dataOciObjectstoragePreauthrequests } from 'rhizo-co-terraform-provider-oci'

const dataOciObjectstoragePreauthrequestsFilter: dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#name DataOciObjectstoragePreauthrequests#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#values DataOciObjectstoragePreauthrequests#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#regex DataOciObjectstoragePreauthrequests#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#name DataOciObjectstoragePreauthrequests#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#values DataOciObjectstoragePreauthrequests#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#regex DataOciObjectstoragePreauthrequests#regex}.

---

### DataOciObjectstoragePreauthrequestsPreauthenticatedRequests <a name="DataOciObjectstoragePreauthrequestsPreauthenticatedRequests" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequests"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequests.Initializer"></a>

```typescript
import { dataOciObjectstoragePreauthrequests } from 'rhizo-co-terraform-provider-oci'

const dataOciObjectstoragePreauthrequestsPreauthenticatedRequests: dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequests = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciObjectstoragePreauthrequestsFilterList <a name="DataOciObjectstoragePreauthrequestsFilterList" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.Initializer"></a>

```typescript
import { dataOciObjectstoragePreauthrequests } from 'rhizo-co-terraform-provider-oci'

new dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.get"></a>

```typescript
public get(index: number): DataOciObjectstoragePreauthrequestsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter">DataOciObjectstoragePreauthrequestsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciObjectstoragePreauthrequestsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter">DataOciObjectstoragePreauthrequestsFilter</a>[]

---


### DataOciObjectstoragePreauthrequestsFilterOutputReference <a name="DataOciObjectstoragePreauthrequestsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciObjectstoragePreauthrequests } from 'rhizo-co-terraform-provider-oci'

new dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter">DataOciObjectstoragePreauthrequestsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciObjectstoragePreauthrequestsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter">DataOciObjectstoragePreauthrequestsFilter</a>

---


### DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList <a name="DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.Initializer"></a>

```typescript
import { dataOciObjectstoragePreauthrequests } from 'rhizo-co-terraform-provider-oci'

new dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.get"></a>

```typescript
public get(index: number): DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference <a name="DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.Initializer"></a>

```typescript
import { dataOciObjectstoragePreauthrequests } from 'rhizo-co-terraform-provider-oci'

new dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.accessType">accessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.accessUri">accessUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.bucketListingAction">bucketListingAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.fullPath">fullPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.objectName">objectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.parId">parId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.timeExpires">timeExpires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequests">DataOciObjectstoragePreauthrequestsPreauthenticatedRequests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.accessType"></a>

```typescript
public readonly accessType: string;
```

- *Type:* string

---

##### `accessUri`<sup>Required</sup> <a name="accessUri" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.accessUri"></a>

```typescript
public readonly accessUri: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `bucketListingAction`<sup>Required</sup> <a name="bucketListingAction" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.bucketListingAction"></a>

```typescript
public readonly bucketListingAction: string;
```

- *Type:* string

---

##### `fullPath`<sup>Required</sup> <a name="fullPath" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.fullPath"></a>

```typescript
public readonly fullPath: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `objectName`<sup>Required</sup> <a name="objectName" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.objectName"></a>

```typescript
public readonly objectName: string;
```

- *Type:* string

---

##### `parId`<sup>Required</sup> <a name="parId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.parId"></a>

```typescript
public readonly parId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeExpires`<sup>Required</sup> <a name="timeExpires" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.timeExpires"></a>

```typescript
public readonly timeExpires: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciObjectstoragePreauthrequestsPreauthenticatedRequests;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequests">DataOciObjectstoragePreauthrequestsPreauthenticatedRequests</a>

---



