# `dataOciOsmanagementManagedInstances` Submodule <a name="`dataOciOsmanagementManagedInstances` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsmanagementManagedInstances <a name="DataOciOsmanagementManagedInstances" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances oci_osmanagement_managed_instances}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances(scope: Construct, id: string, config: DataOciOsmanagementManagedInstancesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig">DataOciOsmanagementManagedInstancesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig">DataOciOsmanagementManagedInstancesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.resetOsFamily">resetOsFamily</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOsmanagementManagedInstancesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter">DataOciOsmanagementManagedInstancesFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOsFamily` <a name="resetOsFamily" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.resetOsFamily"></a>

```typescript
public resetOsFamily(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsmanagementManagedInstances resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.isConstruct"></a>

```typescript
import { dataOciOsmanagementManagedInstances } from 'rhizo-co-terraform-provider-oci'

dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.isTerraformElement"></a>

```typescript
import { dataOciOsmanagementManagedInstances } from 'rhizo-co-terraform-provider-oci'

dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.isTerraformDataSource"></a>

```typescript
import { dataOciOsmanagementManagedInstances } from 'rhizo-co-terraform-provider-oci'

dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.generateConfigForImport"></a>

```typescript
import { dataOciOsmanagementManagedInstances } from 'rhizo-co-terraform-provider-oci'

dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOsmanagementManagedInstances resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsmanagementManagedInstances to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsmanagementManagedInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsmanagementManagedInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList">DataOciOsmanagementManagedInstancesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.managedInstances">managedInstances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList">DataOciOsmanagementManagedInstancesManagedInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter">DataOciOsmanagementManagedInstancesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.osFamilyInput">osFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.osFamily">osFamily</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.filter"></a>

```typescript
public readonly filter: DataOciOsmanagementManagedInstancesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList">DataOciOsmanagementManagedInstancesFilterList</a>

---

##### `managedInstances`<sup>Required</sup> <a name="managedInstances" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.managedInstances"></a>

```typescript
public readonly managedInstances: DataOciOsmanagementManagedInstancesManagedInstancesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList">DataOciOsmanagementManagedInstancesManagedInstancesList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOsmanagementManagedInstancesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter">DataOciOsmanagementManagedInstancesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `osFamilyInput`<sup>Optional</sup> <a name="osFamilyInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.osFamilyInput"></a>

```typescript
public readonly osFamilyInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.osFamily"></a>

```typescript
public readonly osFamily: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstances.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsmanagementManagedInstancesConfig <a name="DataOciOsmanagementManagedInstancesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciOsmanagementManagedInstancesConfig: dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#compartment_id DataOciOsmanagementManagedInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#display_name DataOciOsmanagementManagedInstances#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter">DataOciOsmanagementManagedInstancesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#id DataOciOsmanagementManagedInstances#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.osFamily">osFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#os_family DataOciOsmanagementManagedInstances#os_family}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#compartment_id DataOciOsmanagementManagedInstances#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#display_name DataOciOsmanagementManagedInstances#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOsmanagementManagedInstancesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter">DataOciOsmanagementManagedInstancesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#filter DataOciOsmanagementManagedInstances#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#id DataOciOsmanagementManagedInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `osFamily`<sup>Optional</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesConfig.property.osFamily"></a>

```typescript
public readonly osFamily: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#os_family DataOciOsmanagementManagedInstances#os_family}.

---

### DataOciOsmanagementManagedInstancesFilter <a name="DataOciOsmanagementManagedInstancesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciOsmanagementManagedInstancesFilter: dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#name DataOciOsmanagementManagedInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#values DataOciOsmanagementManagedInstances#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#regex DataOciOsmanagementManagedInstances#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#name DataOciOsmanagementManagedInstances#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#values DataOciOsmanagementManagedInstances#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instances#regex DataOciOsmanagementManagedInstances#regex}.

---

### DataOciOsmanagementManagedInstancesManagedInstances <a name="DataOciOsmanagementManagedInstancesManagedInstances" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstances.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciOsmanagementManagedInstancesManagedInstances: dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstances = { ... }
```


### DataOciOsmanagementManagedInstancesManagedInstancesAutonomous <a name="DataOciOsmanagementManagedInstancesManagedInstancesAutonomous" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomous"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomous.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciOsmanagementManagedInstancesManagedInstancesAutonomous: dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomous = { ... }
```


### DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSources <a name="DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSources.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSources: dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSources = { ... }
```


### DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroups <a name="DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroups" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroups.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroups: dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroups = { ... }
```


### DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSource <a name="DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSource.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSource: dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSource = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsmanagementManagedInstancesFilterList <a name="DataOciOsmanagementManagedInstancesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.get"></a>

```typescript
public get(index: number): DataOciOsmanagementManagedInstancesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter">DataOciOsmanagementManagedInstancesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsmanagementManagedInstancesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter">DataOciOsmanagementManagedInstancesFilter</a>[]

---


### DataOciOsmanagementManagedInstancesFilterOutputReference <a name="DataOciOsmanagementManagedInstancesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter">DataOciOsmanagementManagedInstancesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsmanagementManagedInstancesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesFilter">DataOciOsmanagementManagedInstancesFilter</a>

---


### DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList <a name="DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.get"></a>

```typescript
public get(index: number): DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference <a name="DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.property.isAutoUpdateEnabled">isAutoUpdateEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomous">DataOciOsmanagementManagedInstancesManagedInstancesAutonomous</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isAutoUpdateEnabled`<sup>Required</sup> <a name="isAutoUpdateEnabled" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.property.isAutoUpdateEnabled"></a>

```typescript
public readonly isAutoUpdateEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsmanagementManagedInstancesManagedInstancesAutonomous;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomous">DataOciOsmanagementManagedInstancesManagedInstancesAutonomous</a>

---


### DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList <a name="DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.get"></a>

```typescript
public get(index: number): DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference <a name="DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSources">DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSources;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSources">DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSources</a>

---


### DataOciOsmanagementManagedInstancesManagedInstancesList <a name="DataOciOsmanagementManagedInstancesManagedInstancesList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.get"></a>

```typescript
public get(index: number): DataOciOsmanagementManagedInstancesManagedInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList <a name="DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.get"></a>

```typescript
public get(index: number): DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference <a name="DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroups">DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroups;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroups">DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroups</a>

---


### DataOciOsmanagementManagedInstancesManagedInstancesOutputReference <a name="DataOciOsmanagementManagedInstancesManagedInstancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.autonomous">autonomous</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList">DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.bugUpdatesAvailable">bugUpdatesAvailable</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.childSoftwareSources">childSoftwareSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList">DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.enhancementUpdatesAvailable">enhancementUpdatesAvailable</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.isDataCollectionAuthorized">isDataCollectionAuthorized</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.isRebootRequired">isRebootRequired</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.kspliceEffectiveKernelVersion">kspliceEffectiveKernelVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.lastBoot">lastBoot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.lastCheckin">lastCheckin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.managedInstanceGroups">managedInstanceGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList">DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.notificationTopicId">notificationTopicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.osFamily">osFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.osKernelVersion">osKernelVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.osName">osName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.osVersion">osVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.otherUpdatesAvailable">otherUpdatesAvailable</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.parentSoftwareSource">parentSoftwareSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList">DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.scheduledJobCount">scheduledJobCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.securityUpdatesAvailable">securityUpdatesAvailable</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.updatesAvailable">updatesAvailable</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.workRequestCount">workRequestCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstances">DataOciOsmanagementManagedInstancesManagedInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autonomous`<sup>Required</sup> <a name="autonomous" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.autonomous"></a>

```typescript
public readonly autonomous: DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList">DataOciOsmanagementManagedInstancesManagedInstancesAutonomousList</a>

---

##### `bugUpdatesAvailable`<sup>Required</sup> <a name="bugUpdatesAvailable" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.bugUpdatesAvailable"></a>

```typescript
public readonly bugUpdatesAvailable: number;
```

- *Type:* number

---

##### `childSoftwareSources`<sup>Required</sup> <a name="childSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.childSoftwareSources"></a>

```typescript
public readonly childSoftwareSources: DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList">DataOciOsmanagementManagedInstancesManagedInstancesChildSoftwareSourcesList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enhancementUpdatesAvailable`<sup>Required</sup> <a name="enhancementUpdatesAvailable" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.enhancementUpdatesAvailable"></a>

```typescript
public readonly enhancementUpdatesAvailable: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isDataCollectionAuthorized`<sup>Required</sup> <a name="isDataCollectionAuthorized" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.isDataCollectionAuthorized"></a>

```typescript
public readonly isDataCollectionAuthorized: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isRebootRequired`<sup>Required</sup> <a name="isRebootRequired" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.isRebootRequired"></a>

```typescript
public readonly isRebootRequired: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `kspliceEffectiveKernelVersion`<sup>Required</sup> <a name="kspliceEffectiveKernelVersion" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.kspliceEffectiveKernelVersion"></a>

```typescript
public readonly kspliceEffectiveKernelVersion: string;
```

- *Type:* string

---

##### `lastBoot`<sup>Required</sup> <a name="lastBoot" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.lastBoot"></a>

```typescript
public readonly lastBoot: string;
```

- *Type:* string

---

##### `lastCheckin`<sup>Required</sup> <a name="lastCheckin" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.lastCheckin"></a>

```typescript
public readonly lastCheckin: string;
```

- *Type:* string

---

##### `managedInstanceGroups`<sup>Required</sup> <a name="managedInstanceGroups" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.managedInstanceGroups"></a>

```typescript
public readonly managedInstanceGroups: DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList">DataOciOsmanagementManagedInstancesManagedInstancesManagedInstanceGroupsList</a>

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

---

##### `notificationTopicId`<sup>Required</sup> <a name="notificationTopicId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.notificationTopicId"></a>

```typescript
public readonly notificationTopicId: string;
```

- *Type:* string

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.osFamily"></a>

```typescript
public readonly osFamily: string;
```

- *Type:* string

---

##### `osKernelVersion`<sup>Required</sup> <a name="osKernelVersion" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.osKernelVersion"></a>

```typescript
public readonly osKernelVersion: string;
```

- *Type:* string

---

##### `osName`<sup>Required</sup> <a name="osName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.osName"></a>

```typescript
public readonly osName: string;
```

- *Type:* string

---

##### `osVersion`<sup>Required</sup> <a name="osVersion" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.osVersion"></a>

```typescript
public readonly osVersion: string;
```

- *Type:* string

---

##### `otherUpdatesAvailable`<sup>Required</sup> <a name="otherUpdatesAvailable" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.otherUpdatesAvailable"></a>

```typescript
public readonly otherUpdatesAvailable: number;
```

- *Type:* number

---

##### `parentSoftwareSource`<sup>Required</sup> <a name="parentSoftwareSource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.parentSoftwareSource"></a>

```typescript
public readonly parentSoftwareSource: DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList">DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList</a>

---

##### `scheduledJobCount`<sup>Required</sup> <a name="scheduledJobCount" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.scheduledJobCount"></a>

```typescript
public readonly scheduledJobCount: number;
```

- *Type:* number

---

##### `securityUpdatesAvailable`<sup>Required</sup> <a name="securityUpdatesAvailable" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.securityUpdatesAvailable"></a>

```typescript
public readonly securityUpdatesAvailable: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `updatesAvailable`<sup>Required</sup> <a name="updatesAvailable" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.updatesAvailable"></a>

```typescript
public readonly updatesAvailable: number;
```

- *Type:* number

---

##### `workRequestCount`<sup>Required</sup> <a name="workRequestCount" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.workRequestCount"></a>

```typescript
public readonly workRequestCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsmanagementManagedInstancesManagedInstances;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstances">DataOciOsmanagementManagedInstancesManagedInstances</a>

---


### DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList <a name="DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.get"></a>

```typescript
public get(index: number): DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference <a name="DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSource">DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSource;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstances.DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSource">DataOciOsmanagementManagedInstancesManagedInstancesParentSoftwareSource</a>

---



