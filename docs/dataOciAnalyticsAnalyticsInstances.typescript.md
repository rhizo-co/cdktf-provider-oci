# `dataOciAnalyticsAnalyticsInstances` Submodule <a name="`dataOciAnalyticsAnalyticsInstances` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAnalyticsAnalyticsInstances <a name="DataOciAnalyticsAnalyticsInstances" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances oci_analytics_analytics_instances}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer"></a>

```typescript
import { dataOciAnalyticsAnalyticsInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances(scope: Construct, id: string, config: DataOciAnalyticsAnalyticsInstancesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig">DataOciAnalyticsAnalyticsInstancesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig">DataOciAnalyticsAnalyticsInstancesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetCapacityType">resetCapacityType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetFeatureSet">resetFeatureSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciAnalyticsAnalyticsInstancesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter">DataOciAnalyticsAnalyticsInstancesFilter</a>[]

---

##### `resetCapacityType` <a name="resetCapacityType" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetCapacityType"></a>

```typescript
public resetCapacityType(): void
```

##### `resetFeatureSet` <a name="resetFeatureSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetFeatureSet"></a>

```typescript
public resetFeatureSet(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetName"></a>

```typescript
public resetName(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAnalyticsAnalyticsInstances resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.isConstruct"></a>

```typescript
import { dataOciAnalyticsAnalyticsInstances } from 'rhizo-co-terraform-provider-oci'

dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.isTerraformElement"></a>

```typescript
import { dataOciAnalyticsAnalyticsInstances } from 'rhizo-co-terraform-provider-oci'

dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.isTerraformDataSource"></a>

```typescript
import { dataOciAnalyticsAnalyticsInstances } from 'rhizo-co-terraform-provider-oci'

dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.generateConfigForImport"></a>

```typescript
import { dataOciAnalyticsAnalyticsInstances } from 'rhizo-co-terraform-provider-oci'

dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciAnalyticsAnalyticsInstances resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciAnalyticsAnalyticsInstances to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciAnalyticsAnalyticsInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAnalyticsAnalyticsInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.analyticsInstances">analyticsInstances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList">DataOciAnalyticsAnalyticsInstancesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.capacityTypeInput">capacityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.featureSetInput">featureSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter">DataOciAnalyticsAnalyticsInstancesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.capacityType">capacityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.featureSet">featureSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `analyticsInstances`<sup>Required</sup> <a name="analyticsInstances" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.analyticsInstances"></a>

```typescript
public readonly analyticsInstances: DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.filter"></a>

```typescript
public readonly filter: DataOciAnalyticsAnalyticsInstancesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList">DataOciAnalyticsAnalyticsInstancesFilterList</a>

---

##### `capacityTypeInput`<sup>Optional</sup> <a name="capacityTypeInput" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.capacityTypeInput"></a>

```typescript
public readonly capacityTypeInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `featureSetInput`<sup>Optional</sup> <a name="featureSetInput" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.featureSetInput"></a>

```typescript
public readonly featureSetInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciAnalyticsAnalyticsInstancesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter">DataOciAnalyticsAnalyticsInstancesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `capacityType`<sup>Required</sup> <a name="capacityType" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.capacityType"></a>

```typescript
public readonly capacityType: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `featureSet`<sup>Required</sup> <a name="featureSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.featureSet"></a>

```typescript
public readonly featureSet: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAnalyticsAnalyticsInstancesAnalyticsInstances <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstances" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstances.Initializer"></a>

```typescript
import { dataOciAnalyticsAnalyticsInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciAnalyticsAnalyticsInstancesAnalyticsInstances: dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstances = { ... }
```


### DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity.Initializer"></a>

```typescript
import { dataOciAnalyticsAnalyticsInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity: dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity = { ... }
```


### DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails.Initializer"></a>

```typescript
import { dataOciAnalyticsAnalyticsInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails: dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails = { ... }
```


### DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns.Initializer"></a>

```typescript
import { dataOciAnalyticsAnalyticsInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns: dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns = { ... }
```


### DataOciAnalyticsAnalyticsInstancesConfig <a name="DataOciAnalyticsAnalyticsInstancesConfig" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.Initializer"></a>

```typescript
import { dataOciAnalyticsAnalyticsInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciAnalyticsAnalyticsInstancesConfig: dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#compartment_id DataOciAnalyticsAnalyticsInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.capacityType">capacityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#capacity_type DataOciAnalyticsAnalyticsInstances#capacity_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.featureSet">featureSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#feature_set DataOciAnalyticsAnalyticsInstances#feature_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter">DataOciAnalyticsAnalyticsInstancesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#id DataOciAnalyticsAnalyticsInstances#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#name DataOciAnalyticsAnalyticsInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#state DataOciAnalyticsAnalyticsInstances#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#compartment_id DataOciAnalyticsAnalyticsInstances#compartment_id}.

---

##### `capacityType`<sup>Optional</sup> <a name="capacityType" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.capacityType"></a>

```typescript
public readonly capacityType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#capacity_type DataOciAnalyticsAnalyticsInstances#capacity_type}.

---

##### `featureSet`<sup>Optional</sup> <a name="featureSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.featureSet"></a>

```typescript
public readonly featureSet: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#feature_set DataOciAnalyticsAnalyticsInstances#feature_set}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciAnalyticsAnalyticsInstancesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter">DataOciAnalyticsAnalyticsInstancesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#filter DataOciAnalyticsAnalyticsInstances#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#id DataOciAnalyticsAnalyticsInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#name DataOciAnalyticsAnalyticsInstances#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#state DataOciAnalyticsAnalyticsInstances#state}.

---

### DataOciAnalyticsAnalyticsInstancesFilter <a name="DataOciAnalyticsAnalyticsInstancesFilter" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter.Initializer"></a>

```typescript
import { dataOciAnalyticsAnalyticsInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciAnalyticsAnalyticsInstancesFilter: dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#name DataOciAnalyticsAnalyticsInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#values DataOciAnalyticsAnalyticsInstances#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#regex DataOciAnalyticsAnalyticsInstances#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#name DataOciAnalyticsAnalyticsInstances#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#values DataOciAnalyticsAnalyticsInstances#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#regex DataOciAnalyticsAnalyticsInstances#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.Initializer"></a>

```typescript
import { dataOciAnalyticsAnalyticsInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.get"></a>

```typescript
public get(index: number): DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.Initializer"></a>

```typescript
import { dataOciAnalyticsAnalyticsInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.property.capacityType">capacityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.property.capacityValue">capacityValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityType`<sup>Required</sup> <a name="capacityType" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.property.capacityType"></a>

```typescript
public readonly capacityType: string;
```

- *Type:* string

---

##### `capacityValue`<sup>Required</sup> <a name="capacityValue" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.property.capacityValue"></a>

```typescript
public readonly capacityValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity</a>

---


### DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.Initializer"></a>

```typescript
import { dataOciAnalyticsAnalyticsInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.get"></a>

```typescript
public get(index: number): DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.Initializer"></a>

```typescript
import { dataOciAnalyticsAnalyticsInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.get"></a>

```typescript
public get(index: number): DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciAnalyticsAnalyticsInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.networkEndpointType">networkEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.networkSecurityGroupIds">networkSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.whitelistedIps">whitelistedIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.whitelistedServices">whitelistedServices</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.whitelistedVcns">whitelistedVcns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkEndpointType`<sup>Required</sup> <a name="networkEndpointType" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.networkEndpointType"></a>

```typescript
public readonly networkEndpointType: string;
```

- *Type:* string

---

##### `networkSecurityGroupIds`<sup>Required</sup> <a name="networkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.networkSecurityGroupIds"></a>

```typescript
public readonly networkSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

##### `whitelistedIps`<sup>Required</sup> <a name="whitelistedIps" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.whitelistedIps"></a>

```typescript
public readonly whitelistedIps: string[];
```

- *Type:* string[]

---

##### `whitelistedServices`<sup>Required</sup> <a name="whitelistedServices" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.whitelistedServices"></a>

```typescript
public readonly whitelistedServices: string[];
```

- *Type:* string[]

---

##### `whitelistedVcns`<sup>Required</sup> <a name="whitelistedVcns" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.whitelistedVcns"></a>

```typescript
public readonly whitelistedVcns: DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails</a>

---


### DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.Initializer"></a>

```typescript
import { dataOciAnalyticsAnalyticsInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.get"></a>

```typescript
public get(index: number): DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer"></a>

```typescript
import { dataOciAnalyticsAnalyticsInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.whitelistedIps">whitelistedIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `whitelistedIps`<sup>Required</sup> <a name="whitelistedIps" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.whitelistedIps"></a>

```typescript
public readonly whitelistedIps: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns</a>

---


### DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.Initializer"></a>

```typescript
import { dataOciAnalyticsAnalyticsInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.adminUser">adminUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.capacity">capacity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.emailNotification">emailNotification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.featureBundle">featureBundle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.featureSet">featureSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.idcsAccessToken">idcsAccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.licenseType">licenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.networkEndpointDetails">networkEndpointDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.serviceUrl">serviceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.updateChannel">updateChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstances">DataOciAnalyticsAnalyticsInstancesAnalyticsInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminUser`<sup>Required</sup> <a name="adminUser" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.adminUser"></a>

```typescript
public readonly adminUser: string;
```

- *Type:* string

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.capacity"></a>

```typescript
public readonly capacity: DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `emailNotification`<sup>Required</sup> <a name="emailNotification" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.emailNotification"></a>

```typescript
public readonly emailNotification: string;
```

- *Type:* string

---

##### `featureBundle`<sup>Required</sup> <a name="featureBundle" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.featureBundle"></a>

```typescript
public readonly featureBundle: string;
```

- *Type:* string

---

##### `featureSet`<sup>Required</sup> <a name="featureSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.featureSet"></a>

```typescript
public readonly featureSet: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsAccessToken`<sup>Required</sup> <a name="idcsAccessToken" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.idcsAccessToken"></a>

```typescript
public readonly idcsAccessToken: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkEndpointDetails`<sup>Required</sup> <a name="networkEndpointDetails" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.networkEndpointDetails"></a>

```typescript
public readonly networkEndpointDetails: DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList</a>

---

##### `serviceUrl`<sup>Required</sup> <a name="serviceUrl" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.serviceUrl"></a>

```typescript
public readonly serviceUrl: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `updateChannel`<sup>Required</sup> <a name="updateChannel" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.updateChannel"></a>

```typescript
public readonly updateChannel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAnalyticsAnalyticsInstancesAnalyticsInstances;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstances">DataOciAnalyticsAnalyticsInstancesAnalyticsInstances</a>

---


### DataOciAnalyticsAnalyticsInstancesFilterList <a name="DataOciAnalyticsAnalyticsInstancesFilterList" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.Initializer"></a>

```typescript
import { dataOciAnalyticsAnalyticsInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.get"></a>

```typescript
public get(index: number): DataOciAnalyticsAnalyticsInstancesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter">DataOciAnalyticsAnalyticsInstancesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciAnalyticsAnalyticsInstancesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter">DataOciAnalyticsAnalyticsInstancesFilter</a>[]

---


### DataOciAnalyticsAnalyticsInstancesFilterOutputReference <a name="DataOciAnalyticsAnalyticsInstancesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciAnalyticsAnalyticsInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter">DataOciAnalyticsAnalyticsInstancesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciAnalyticsAnalyticsInstancesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter">DataOciAnalyticsAnalyticsInstancesFilter</a>

---



