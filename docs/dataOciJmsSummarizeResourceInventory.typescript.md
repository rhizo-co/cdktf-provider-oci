# `dataOciJmsSummarizeResourceInventory` Submodule <a name="`dataOciJmsSummarizeResourceInventory` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsSummarizeResourceInventory <a name="DataOciJmsSummarizeResourceInventory" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_summarize_resource_inventory oci_jms_summarize_resource_inventory}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.Initializer"></a>

```typescript
import { dataOciJmsSummarizeResourceInventory } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory(scope: Construct, id: string, config?: DataOciJmsSummarizeResourceInventoryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig">DataOciJmsSummarizeResourceInventoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig">DataOciJmsSummarizeResourceInventoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.resetTimeEnd">resetTimeEnd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.resetTimeStart">resetTimeStart</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeEnd` <a name="resetTimeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.resetTimeEnd"></a>

```typescript
public resetTimeEnd(): void
```

##### `resetTimeStart` <a name="resetTimeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.resetTimeStart"></a>

```typescript
public resetTimeStart(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciJmsSummarizeResourceInventory resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.isConstruct"></a>

```typescript
import { dataOciJmsSummarizeResourceInventory } from 'rhizo-co-terraform-provider-oci'

dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.isTerraformElement"></a>

```typescript
import { dataOciJmsSummarizeResourceInventory } from 'rhizo-co-terraform-provider-oci'

dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.isTerraformDataSource"></a>

```typescript
import { dataOciJmsSummarizeResourceInventory } from 'rhizo-co-terraform-provider-oci'

dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.generateConfigForImport"></a>

```typescript
import { dataOciJmsSummarizeResourceInventory } from 'rhizo-co-terraform-provider-oci'

dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciJmsSummarizeResourceInventory resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciJmsSummarizeResourceInventory to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciJmsSummarizeResourceInventory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_summarize_resource_inventory#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsSummarizeResourceInventory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.activeFleetCount">activeFleetCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.applicationCount">applicationCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.installationCount">installationCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.jreCount">jreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.managedInstanceCount">managedInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.timeEndInput">timeEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.timeStartInput">timeStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.timeEnd">timeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `activeFleetCount`<sup>Required</sup> <a name="activeFleetCount" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.activeFleetCount"></a>

```typescript
public readonly activeFleetCount: number;
```

- *Type:* number

---

##### `applicationCount`<sup>Required</sup> <a name="applicationCount" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.applicationCount"></a>

```typescript
public readonly applicationCount: number;
```

- *Type:* number

---

##### `installationCount`<sup>Required</sup> <a name="installationCount" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.installationCount"></a>

```typescript
public readonly installationCount: number;
```

- *Type:* number

---

##### `jreCount`<sup>Required</sup> <a name="jreCount" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.jreCount"></a>

```typescript
public readonly jreCount: number;
```

- *Type:* number

---

##### `managedInstanceCount`<sup>Required</sup> <a name="managedInstanceCount" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.managedInstanceCount"></a>

```typescript
public readonly managedInstanceCount: number;
```

- *Type:* number

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeEndInput`<sup>Optional</sup> <a name="timeEndInput" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.timeEndInput"></a>

```typescript
public readonly timeEndInput: string;
```

- *Type:* string

---

##### `timeStartInput`<sup>Optional</sup> <a name="timeStartInput" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.timeStartInput"></a>

```typescript
public readonly timeStartInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsSummarizeResourceInventoryConfig <a name="DataOciJmsSummarizeResourceInventoryConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.Initializer"></a>

```typescript
import { dataOciJmsSummarizeResourceInventory } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsSummarizeResourceInventoryConfig: dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_summarize_resource_inventory#compartment_id DataOciJmsSummarizeResourceInventory#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_summarize_resource_inventory#id DataOciJmsSummarizeResourceInventory#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.timeEnd">timeEnd</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_summarize_resource_inventory#time_end DataOciJmsSummarizeResourceInventory#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.timeStart">timeStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_summarize_resource_inventory#time_start DataOciJmsSummarizeResourceInventory#time_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_summarize_resource_inventory#compartment_id DataOciJmsSummarizeResourceInventory#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_summarize_resource_inventory#id DataOciJmsSummarizeResourceInventory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeEnd`<sup>Optional</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_summarize_resource_inventory#time_end DataOciJmsSummarizeResourceInventory#time_end}.

---

##### `timeStart`<sup>Optional</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_summarize_resource_inventory#time_start DataOciJmsSummarizeResourceInventory#time_start}.

---



