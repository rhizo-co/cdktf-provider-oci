# `dataOciJmsListJreUsage` Submodule <a name="`dataOciJmsListJreUsage` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsListJreUsage <a name="DataOciJmsListJreUsage" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_list_jre_usage oci_jms_list_jre_usage}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.Initializer"></a>

```typescript
import { dataOciJmsListJreUsage } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsListJreUsage.DataOciJmsListJreUsage(scope: Construct, id: string, config?: DataOciJmsListJreUsageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig">DataOciJmsListJreUsageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig">DataOciJmsListJreUsageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.resetApplicationId">resetApplicationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.resetApplicationName">resetApplicationName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.resetHostId">resetHostId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.resetTimeEnd">resetTimeEnd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.resetTimeStart">resetTimeStart</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetApplicationId` <a name="resetApplicationId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.resetApplicationId"></a>

```typescript
public resetApplicationId(): void
```

##### `resetApplicationName` <a name="resetApplicationName" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.resetApplicationName"></a>

```typescript
public resetApplicationName(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetHostId` <a name="resetHostId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.resetHostId"></a>

```typescript
public resetHostId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeEnd` <a name="resetTimeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.resetTimeEnd"></a>

```typescript
public resetTimeEnd(): void
```

##### `resetTimeStart` <a name="resetTimeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.resetTimeStart"></a>

```typescript
public resetTimeStart(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciJmsListJreUsage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.isConstruct"></a>

```typescript
import { dataOciJmsListJreUsage } from 'rhizo-co-terraform-provider-oci'

dataOciJmsListJreUsage.DataOciJmsListJreUsage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.isTerraformElement"></a>

```typescript
import { dataOciJmsListJreUsage } from 'rhizo-co-terraform-provider-oci'

dataOciJmsListJreUsage.DataOciJmsListJreUsage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.isTerraformDataSource"></a>

```typescript
import { dataOciJmsListJreUsage } from 'rhizo-co-terraform-provider-oci'

dataOciJmsListJreUsage.DataOciJmsListJreUsage.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.generateConfigForImport"></a>

```typescript
import { dataOciJmsListJreUsage } from 'rhizo-co-terraform-provider-oci'

dataOciJmsListJreUsage.DataOciJmsListJreUsage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciJmsListJreUsage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciJmsListJreUsage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciJmsListJreUsage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_list_jre_usage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsListJreUsage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList">DataOciJmsListJreUsageItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.applicationNameInput">applicationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.hostIdInput">hostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.timeEndInput">timeEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.timeStartInput">timeStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.applicationName">applicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.hostId">hostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.timeEnd">timeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.items"></a>

```typescript
public readonly items: DataOciJmsListJreUsageItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList">DataOciJmsListJreUsageItemsList</a>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `applicationNameInput`<sup>Optional</sup> <a name="applicationNameInput" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.applicationNameInput"></a>

```typescript
public readonly applicationNameInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `hostIdInput`<sup>Optional</sup> <a name="hostIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.hostIdInput"></a>

```typescript
public readonly hostIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeEndInput`<sup>Optional</sup> <a name="timeEndInput" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.timeEndInput"></a>

```typescript
public readonly timeEndInput: string;
```

- *Type:* string

---

##### `timeStartInput`<sup>Optional</sup> <a name="timeStartInput" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.timeStartInput"></a>

```typescript
public readonly timeStartInput: string;
```

- *Type:* string

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.hostId"></a>

```typescript
public readonly hostId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsListJreUsageConfig <a name="DataOciJmsListJreUsageConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.Initializer"></a>

```typescript
import { dataOciJmsListJreUsage } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsListJreUsageConfig: dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.applicationId">applicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_list_jre_usage#application_id DataOciJmsListJreUsage#application_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.applicationName">applicationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_list_jre_usage#application_name DataOciJmsListJreUsage#application_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_list_jre_usage#compartment_id DataOciJmsListJreUsage#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.hostId">hostId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_list_jre_usage#host_id DataOciJmsListJreUsage#host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_list_jre_usage#id DataOciJmsListJreUsage#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.timeEnd">timeEnd</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_list_jre_usage#time_end DataOciJmsListJreUsage#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.timeStart">timeStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_list_jre_usage#time_start DataOciJmsListJreUsage#time_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_list_jre_usage#application_id DataOciJmsListJreUsage#application_id}.

---

##### `applicationName`<sup>Optional</sup> <a name="applicationName" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_list_jre_usage#application_name DataOciJmsListJreUsage#application_name}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_list_jre_usage#compartment_id DataOciJmsListJreUsage#compartment_id}.

---

##### `hostId`<sup>Optional</sup> <a name="hostId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.hostId"></a>

```typescript
public readonly hostId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_list_jre_usage#host_id DataOciJmsListJreUsage#host_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_list_jre_usage#id DataOciJmsListJreUsage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeEnd`<sup>Optional</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_list_jre_usage#time_end DataOciJmsListJreUsage#time_end}.

---

##### `timeStart`<sup>Optional</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageConfig.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_list_jre_usage#time_start DataOciJmsListJreUsage#time_start}.

---

### DataOciJmsListJreUsageItems <a name="DataOciJmsListJreUsageItems" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItems.Initializer"></a>

```typescript
import { dataOciJmsListJreUsage } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsListJreUsageItems: dataOciJmsListJreUsage.DataOciJmsListJreUsageItems = { ... }
```


### DataOciJmsListJreUsageItemsOperatingSystems <a name="DataOciJmsListJreUsageItemsOperatingSystems" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystems.Initializer"></a>

```typescript
import { dataOciJmsListJreUsage } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsListJreUsageItemsOperatingSystems: dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsListJreUsageItemsList <a name="DataOciJmsListJreUsageItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.Initializer"></a>

```typescript
import { dataOciJmsListJreUsage } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.get"></a>

```typescript
public get(index: number): DataOciJmsListJreUsageItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciJmsListJreUsageItemsOperatingSystemsList <a name="DataOciJmsListJreUsageItemsOperatingSystemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.Initializer"></a>

```typescript
import { dataOciJmsListJreUsage } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.get"></a>

```typescript
public get(index: number): DataOciJmsListJreUsageItemsOperatingSystemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciJmsListJreUsageItemsOperatingSystemsOutputReference <a name="DataOciJmsListJreUsageItemsOperatingSystemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.Initializer"></a>

```typescript
import { dataOciJmsListJreUsage } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.property.architecture">architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.property.family">family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.property.managedInstanceCount">managedInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystems">DataOciJmsListJreUsageItemsOperatingSystems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

---

##### `family`<sup>Required</sup> <a name="family" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

---

##### `managedInstanceCount`<sup>Required</sup> <a name="managedInstanceCount" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.property.managedInstanceCount"></a>

```typescript
public readonly managedInstanceCount: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciJmsListJreUsageItemsOperatingSystems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystems">DataOciJmsListJreUsageItemsOperatingSystems</a>

---


### DataOciJmsListJreUsageItemsOutputReference <a name="DataOciJmsListJreUsageItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.Initializer"></a>

```typescript
import { dataOciJmsListJreUsage } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.approximateApplicationCount">approximateApplicationCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.approximateInstallationCount">approximateInstallationCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.approximateManagedInstanceCount">approximateManagedInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.approximatePendingWorkRequestCount">approximatePendingWorkRequestCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.daysUnderSecurityBaseline">daysUnderSecurityBaseline</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.distribution">distribution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.endOfSupportLifeDate">endOfSupportLifeDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.fleetId">fleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.operatingSystems">operatingSystems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList">DataOciJmsListJreUsageItemsOperatingSystemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.releaseDate">releaseDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.securityStatus">securityStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.timeEnd">timeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.timeFirstSeen">timeFirstSeen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.timeLastSeen">timeLastSeen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.vendor">vendor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItems">DataOciJmsListJreUsageItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `approximateApplicationCount`<sup>Required</sup> <a name="approximateApplicationCount" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.approximateApplicationCount"></a>

```typescript
public readonly approximateApplicationCount: number;
```

- *Type:* number

---

##### `approximateInstallationCount`<sup>Required</sup> <a name="approximateInstallationCount" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.approximateInstallationCount"></a>

```typescript
public readonly approximateInstallationCount: number;
```

- *Type:* number

---

##### `approximateManagedInstanceCount`<sup>Required</sup> <a name="approximateManagedInstanceCount" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.approximateManagedInstanceCount"></a>

```typescript
public readonly approximateManagedInstanceCount: number;
```

- *Type:* number

---

##### `approximatePendingWorkRequestCount`<sup>Required</sup> <a name="approximatePendingWorkRequestCount" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.approximatePendingWorkRequestCount"></a>

```typescript
public readonly approximatePendingWorkRequestCount: number;
```

- *Type:* number

---

##### `daysUnderSecurityBaseline`<sup>Required</sup> <a name="daysUnderSecurityBaseline" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.daysUnderSecurityBaseline"></a>

```typescript
public readonly daysUnderSecurityBaseline: number;
```

- *Type:* number

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.distribution"></a>

```typescript
public readonly distribution: string;
```

- *Type:* string

---

##### `endOfSupportLifeDate`<sup>Required</sup> <a name="endOfSupportLifeDate" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.endOfSupportLifeDate"></a>

```typescript
public readonly endOfSupportLifeDate: string;
```

- *Type:* string

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

---

##### `operatingSystems`<sup>Required</sup> <a name="operatingSystems" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.operatingSystems"></a>

```typescript
public readonly operatingSystems: DataOciJmsListJreUsageItemsOperatingSystemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOperatingSystemsList">DataOciJmsListJreUsageItemsOperatingSystemsList</a>

---

##### `releaseDate`<sup>Required</sup> <a name="releaseDate" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.releaseDate"></a>

```typescript
public readonly releaseDate: string;
```

- *Type:* string

---

##### `securityStatus`<sup>Required</sup> <a name="securityStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.securityStatus"></a>

```typescript
public readonly securityStatus: string;
```

- *Type:* string

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

---

##### `timeFirstSeen`<sup>Required</sup> <a name="timeFirstSeen" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.timeFirstSeen"></a>

```typescript
public readonly timeFirstSeen: string;
```

- *Type:* string

---

##### `timeLastSeen`<sup>Required</sup> <a name="timeLastSeen" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.timeLastSeen"></a>

```typescript
public readonly timeLastSeen: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.vendor"></a>

```typescript
public readonly vendor: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciJmsListJreUsageItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsListJreUsage.DataOciJmsListJreUsageItems">DataOciJmsListJreUsageItems</a>

---



