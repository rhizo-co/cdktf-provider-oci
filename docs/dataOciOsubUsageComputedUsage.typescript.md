# `dataOciOsubUsageComputedUsage` Submodule <a name="`dataOciOsubUsageComputedUsage` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsubUsageComputedUsage <a name="DataOciOsubUsageComputedUsage" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage oci_osub_usage_computed_usage}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer"></a>

```typescript
import { dataOciOsubUsageComputedUsage } from 'rhizo-co-terraform-provider-oci'

new dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage(scope: Construct, id: string, config: DataOciOsubUsageComputedUsageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig">DataOciOsubUsageComputedUsageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig">DataOciOsubUsageComputedUsageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.resetXOneOriginRegion">resetXOneOriginRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetFields` <a name="resetFields" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.resetFields"></a>

```typescript
public resetFields(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.resetId"></a>

```typescript
public resetId(): void
```

##### `resetXOneOriginRegion` <a name="resetXOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.resetXOneOriginRegion"></a>

```typescript
public resetXOneOriginRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsubUsageComputedUsage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.isConstruct"></a>

```typescript
import { dataOciOsubUsageComputedUsage } from 'rhizo-co-terraform-provider-oci'

dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.isTerraformElement"></a>

```typescript
import { dataOciOsubUsageComputedUsage } from 'rhizo-co-terraform-provider-oci'

dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.isTerraformDataSource"></a>

```typescript
import { dataOciOsubUsageComputedUsage } from 'rhizo-co-terraform-provider-oci'

dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.generateConfigForImport"></a>

```typescript
import { dataOciOsubUsageComputedUsage } from 'rhizo-co-terraform-provider-oci'

dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOsubUsageComputedUsage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsubUsageComputedUsage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsubUsageComputedUsage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsubUsageComputedUsage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.commitmentServiceId">commitmentServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.computeSource">computeSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.cost">cost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.costRounded">costRounded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.currencyCode">currencyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.dataCenter">dataCenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.isInvoiced">isInvoiced</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.mqsMessageId">mqsMessageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.netUnitPrice">netUnitPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.originalUsageNumber">originalUsageNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.parentProduct">parentProduct</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList">DataOciOsubUsageComputedUsageParentProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.parentSubscribedServiceId">parentSubscribedServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.planNumber">planNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.product">product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList">DataOciOsubUsageComputedUsageProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.quantity">quantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.rateCardId">rateCardId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.rateCardTierdId">rateCardTierdId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.timeMeteredOn">timeMeteredOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.timeOfArrival">timeOfArrival</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.unitOfMeasure">unitOfMeasure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.usageNumber">usageNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.computedUsageIdInput">computedUsageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.fieldsInput">fieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.xOneOriginRegionInput">xOneOriginRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.computedUsageId">computedUsageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.fields">fields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.xOneOriginRegion">xOneOriginRegion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `commitmentServiceId`<sup>Required</sup> <a name="commitmentServiceId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.commitmentServiceId"></a>

```typescript
public readonly commitmentServiceId: string;
```

- *Type:* string

---

##### `computeSource`<sup>Required</sup> <a name="computeSource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.computeSource"></a>

```typescript
public readonly computeSource: string;
```

- *Type:* string

---

##### `cost`<sup>Required</sup> <a name="cost" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.cost"></a>

```typescript
public readonly cost: string;
```

- *Type:* string

---

##### `costRounded`<sup>Required</sup> <a name="costRounded" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.costRounded"></a>

```typescript
public readonly costRounded: string;
```

- *Type:* string

---

##### `currencyCode`<sup>Required</sup> <a name="currencyCode" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.currencyCode"></a>

```typescript
public readonly currencyCode: string;
```

- *Type:* string

---

##### `dataCenter`<sup>Required</sup> <a name="dataCenter" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.dataCenter"></a>

```typescript
public readonly dataCenter: string;
```

- *Type:* string

---

##### `isInvoiced`<sup>Required</sup> <a name="isInvoiced" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.isInvoiced"></a>

```typescript
public readonly isInvoiced: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mqsMessageId`<sup>Required</sup> <a name="mqsMessageId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.mqsMessageId"></a>

```typescript
public readonly mqsMessageId: string;
```

- *Type:* string

---

##### `netUnitPrice`<sup>Required</sup> <a name="netUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.netUnitPrice"></a>

```typescript
public readonly netUnitPrice: string;
```

- *Type:* string

---

##### `originalUsageNumber`<sup>Required</sup> <a name="originalUsageNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.originalUsageNumber"></a>

```typescript
public readonly originalUsageNumber: string;
```

- *Type:* string

---

##### `parentProduct`<sup>Required</sup> <a name="parentProduct" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.parentProduct"></a>

```typescript
public readonly parentProduct: DataOciOsubUsageComputedUsageParentProductList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList">DataOciOsubUsageComputedUsageParentProductList</a>

---

##### `parentSubscribedServiceId`<sup>Required</sup> <a name="parentSubscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.parentSubscribedServiceId"></a>

```typescript
public readonly parentSubscribedServiceId: string;
```

- *Type:* string

---

##### `planNumber`<sup>Required</sup> <a name="planNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.planNumber"></a>

```typescript
public readonly planNumber: string;
```

- *Type:* string

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.product"></a>

```typescript
public readonly product: DataOciOsubUsageComputedUsageProductList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList">DataOciOsubUsageComputedUsageProductList</a>

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.quantity"></a>

```typescript
public readonly quantity: string;
```

- *Type:* string

---

##### `rateCardId`<sup>Required</sup> <a name="rateCardId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.rateCardId"></a>

```typescript
public readonly rateCardId: string;
```

- *Type:* string

---

##### `rateCardTierdId`<sup>Required</sup> <a name="rateCardTierdId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.rateCardTierdId"></a>

```typescript
public readonly rateCardTierdId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeMeteredOn`<sup>Required</sup> <a name="timeMeteredOn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.timeMeteredOn"></a>

```typescript
public readonly timeMeteredOn: string;
```

- *Type:* string

---

##### `timeOfArrival`<sup>Required</sup> <a name="timeOfArrival" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.timeOfArrival"></a>

```typescript
public readonly timeOfArrival: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `unitOfMeasure`<sup>Required</sup> <a name="unitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.unitOfMeasure"></a>

```typescript
public readonly unitOfMeasure: string;
```

- *Type:* string

---

##### `usageNumber`<sup>Required</sup> <a name="usageNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.usageNumber"></a>

```typescript
public readonly usageNumber: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `computedUsageIdInput`<sup>Optional</sup> <a name="computedUsageIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.computedUsageIdInput"></a>

```typescript
public readonly computedUsageIdInput: string;
```

- *Type:* string

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `xOneOriginRegionInput`<sup>Optional</sup> <a name="xOneOriginRegionInput" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.xOneOriginRegionInput"></a>

```typescript
public readonly xOneOriginRegionInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `computedUsageId`<sup>Required</sup> <a name="computedUsageId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.computedUsageId"></a>

```typescript
public readonly computedUsageId: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.fields"></a>

```typescript
public readonly fields: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `xOneOriginRegion`<sup>Required</sup> <a name="xOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.xOneOriginRegion"></a>

```typescript
public readonly xOneOriginRegion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsubUsageComputedUsageConfig <a name="DataOciOsubUsageComputedUsageConfig" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.Initializer"></a>

```typescript
import { dataOciOsubUsageComputedUsage } from 'rhizo-co-terraform-provider-oci'

const dataOciOsubUsageComputedUsageConfig: dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#compartment_id DataOciOsubUsageComputedUsage#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.computedUsageId">computedUsageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#computed_usage_id DataOciOsubUsageComputedUsage#computed_usage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.fields">fields</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#fields DataOciOsubUsageComputedUsage#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#id DataOciOsubUsageComputedUsage#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.xOneOriginRegion">xOneOriginRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#x_one_origin_region DataOciOsubUsageComputedUsage#x_one_origin_region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#compartment_id DataOciOsubUsageComputedUsage#compartment_id}.

---

##### `computedUsageId`<sup>Required</sup> <a name="computedUsageId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.computedUsageId"></a>

```typescript
public readonly computedUsageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#computed_usage_id DataOciOsubUsageComputedUsage#computed_usage_id}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.fields"></a>

```typescript
public readonly fields: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#fields DataOciOsubUsageComputedUsage#fields}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#id DataOciOsubUsageComputedUsage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `xOneOriginRegion`<sup>Optional</sup> <a name="xOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.xOneOriginRegion"></a>

```typescript
public readonly xOneOriginRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#x_one_origin_region DataOciOsubUsageComputedUsage#x_one_origin_region}.

---

### DataOciOsubUsageComputedUsageParentProduct <a name="DataOciOsubUsageComputedUsageParentProduct" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProduct.Initializer"></a>

```typescript
import { dataOciOsubUsageComputedUsage } from 'rhizo-co-terraform-provider-oci'

const dataOciOsubUsageComputedUsageParentProduct: dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProduct = { ... }
```


### DataOciOsubUsageComputedUsageProduct <a name="DataOciOsubUsageComputedUsageProduct" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProduct.Initializer"></a>

```typescript
import { dataOciOsubUsageComputedUsage } from 'rhizo-co-terraform-provider-oci'

const dataOciOsubUsageComputedUsageProduct: dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProduct = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsubUsageComputedUsageParentProductList <a name="DataOciOsubUsageComputedUsageParentProductList" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.Initializer"></a>

```typescript
import { dataOciOsubUsageComputedUsage } from 'rhizo-co-terraform-provider-oci'

new dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.get"></a>

```typescript
public get(index: number): DataOciOsubUsageComputedUsageParentProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsubUsageComputedUsageParentProductOutputReference <a name="DataOciOsubUsageComputedUsageParentProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.Initializer"></a>

```typescript
import { dataOciOsubUsageComputedUsage } from 'rhizo-co-terraform-provider-oci'

new dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.billingCategory">billingCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.partNumber">partNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.productCategory">productCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.provisioningGroup">provisioningGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.ucmRateCardPartType">ucmRateCardPartType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.unitOfMeasure">unitOfMeasure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProduct">DataOciOsubUsageComputedUsageParentProduct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `billingCategory`<sup>Required</sup> <a name="billingCategory" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.billingCategory"></a>

```typescript
public readonly billingCategory: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `partNumber`<sup>Required</sup> <a name="partNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.partNumber"></a>

```typescript
public readonly partNumber: string;
```

- *Type:* string

---

##### `productCategory`<sup>Required</sup> <a name="productCategory" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.productCategory"></a>

```typescript
public readonly productCategory: string;
```

- *Type:* string

---

##### `provisioningGroup`<sup>Required</sup> <a name="provisioningGroup" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.provisioningGroup"></a>

```typescript
public readonly provisioningGroup: string;
```

- *Type:* string

---

##### `ucmRateCardPartType`<sup>Required</sup> <a name="ucmRateCardPartType" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.ucmRateCardPartType"></a>

```typescript
public readonly ucmRateCardPartType: string;
```

- *Type:* string

---

##### `unitOfMeasure`<sup>Required</sup> <a name="unitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.unitOfMeasure"></a>

```typescript
public readonly unitOfMeasure: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsubUsageComputedUsageParentProduct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProduct">DataOciOsubUsageComputedUsageParentProduct</a>

---


### DataOciOsubUsageComputedUsageProductList <a name="DataOciOsubUsageComputedUsageProductList" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.Initializer"></a>

```typescript
import { dataOciOsubUsageComputedUsage } from 'rhizo-co-terraform-provider-oci'

new dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.get"></a>

```typescript
public get(index: number): DataOciOsubUsageComputedUsageProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsubUsageComputedUsageProductOutputReference <a name="DataOciOsubUsageComputedUsageProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.Initializer"></a>

```typescript
import { dataOciOsubUsageComputedUsage } from 'rhizo-co-terraform-provider-oci'

new dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.billingCategory">billingCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.partNumber">partNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.productCategory">productCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.provisioningGroup">provisioningGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.ucmRateCardPartType">ucmRateCardPartType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.unitOfMeasure">unitOfMeasure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProduct">DataOciOsubUsageComputedUsageProduct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `billingCategory`<sup>Required</sup> <a name="billingCategory" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.billingCategory"></a>

```typescript
public readonly billingCategory: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `partNumber`<sup>Required</sup> <a name="partNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.partNumber"></a>

```typescript
public readonly partNumber: string;
```

- *Type:* string

---

##### `productCategory`<sup>Required</sup> <a name="productCategory" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.productCategory"></a>

```typescript
public readonly productCategory: string;
```

- *Type:* string

---

##### `provisioningGroup`<sup>Required</sup> <a name="provisioningGroup" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.provisioningGroup"></a>

```typescript
public readonly provisioningGroup: string;
```

- *Type:* string

---

##### `ucmRateCardPartType`<sup>Required</sup> <a name="ucmRateCardPartType" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.ucmRateCardPartType"></a>

```typescript
public readonly ucmRateCardPartType: string;
```

- *Type:* string

---

##### `unitOfMeasure`<sup>Required</sup> <a name="unitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.unitOfMeasure"></a>

```typescript
public readonly unitOfMeasure: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsubUsageComputedUsageProduct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProduct">DataOciOsubUsageComputedUsageProduct</a>

---



