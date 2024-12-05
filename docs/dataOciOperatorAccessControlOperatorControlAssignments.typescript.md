# `dataOciOperatorAccessControlOperatorControlAssignments` Submodule <a name="`dataOciOperatorAccessControlOperatorControlAssignments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOperatorAccessControlOperatorControlAssignments <a name="DataOciOperatorAccessControlOperatorControlAssignments" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments oci_operator_access_control_operator_control_assignments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlOperatorControlAssignments } from 'rhizo-co-terraform-provider-oci'

new dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments(scope: Construct, id: string, config: DataOciOperatorAccessControlOperatorControlAssignmentsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig">DataOciOperatorAccessControlOperatorControlAssignmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig">DataOciOperatorAccessControlOperatorControlAssignmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetOperatorControlName">resetOperatorControlName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetResourceName">resetResourceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOperatorAccessControlOperatorControlAssignmentsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter">DataOciOperatorAccessControlOperatorControlAssignmentsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOperatorControlName` <a name="resetOperatorControlName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetOperatorControlName"></a>

```typescript
public resetOperatorControlName(): void
```

##### `resetResourceName` <a name="resetResourceName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetResourceName"></a>

```typescript
public resetResourceName(): void
```

##### `resetResourceType` <a name="resetResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetResourceType"></a>

```typescript
public resetResourceType(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOperatorAccessControlOperatorControlAssignments resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.isConstruct"></a>

```typescript
import { dataOciOperatorAccessControlOperatorControlAssignments } from 'rhizo-co-terraform-provider-oci'

dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.isTerraformElement"></a>

```typescript
import { dataOciOperatorAccessControlOperatorControlAssignments } from 'rhizo-co-terraform-provider-oci'

dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.isTerraformDataSource"></a>

```typescript
import { dataOciOperatorAccessControlOperatorControlAssignments } from 'rhizo-co-terraform-provider-oci'

dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.generateConfigForImport"></a>

```typescript
import { dataOciOperatorAccessControlOperatorControlAssignments } from 'rhizo-co-terraform-provider-oci'

dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOperatorAccessControlOperatorControlAssignments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOperatorAccessControlOperatorControlAssignments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOperatorAccessControlOperatorControlAssignments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOperatorAccessControlOperatorControlAssignments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList">DataOciOperatorAccessControlOperatorControlAssignmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.operatorControlAssignmentCollection">operatorControlAssignmentCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList">DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter">DataOciOperatorAccessControlOperatorControlAssignmentsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.operatorControlNameInput">operatorControlNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.resourceNameInput">resourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.operatorControlName">operatorControlName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.filter"></a>

```typescript
public readonly filter: DataOciOperatorAccessControlOperatorControlAssignmentsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList">DataOciOperatorAccessControlOperatorControlAssignmentsFilterList</a>

---

##### `operatorControlAssignmentCollection`<sup>Required</sup> <a name="operatorControlAssignmentCollection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.operatorControlAssignmentCollection"></a>

```typescript
public readonly operatorControlAssignmentCollection: DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList">DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOperatorAccessControlOperatorControlAssignmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter">DataOciOperatorAccessControlOperatorControlAssignmentsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `operatorControlNameInput`<sup>Optional</sup> <a name="operatorControlNameInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.operatorControlNameInput"></a>

```typescript
public readonly operatorControlNameInput: string;
```

- *Type:* string

---

##### `resourceNameInput`<sup>Optional</sup> <a name="resourceNameInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.resourceNameInput"></a>

```typescript
public readonly resourceNameInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `operatorControlName`<sup>Required</sup> <a name="operatorControlName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.operatorControlName"></a>

```typescript
public readonly operatorControlName: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOperatorAccessControlOperatorControlAssignmentsConfig <a name="DataOciOperatorAccessControlOperatorControlAssignmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlOperatorControlAssignments } from 'rhizo-co-terraform-provider-oci'

const dataOciOperatorAccessControlOperatorControlAssignmentsConfig: dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#compartment_id DataOciOperatorAccessControlOperatorControlAssignments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter">DataOciOperatorAccessControlOperatorControlAssignmentsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#id DataOciOperatorAccessControlOperatorControlAssignments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.operatorControlName">operatorControlName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#operator_control_name DataOciOperatorAccessControlOperatorControlAssignments#operator_control_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.resourceName">resourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#resource_name DataOciOperatorAccessControlOperatorControlAssignments#resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#resource_type DataOciOperatorAccessControlOperatorControlAssignments#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#state DataOciOperatorAccessControlOperatorControlAssignments#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#compartment_id DataOciOperatorAccessControlOperatorControlAssignments#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOperatorAccessControlOperatorControlAssignmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter">DataOciOperatorAccessControlOperatorControlAssignmentsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#filter DataOciOperatorAccessControlOperatorControlAssignments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#id DataOciOperatorAccessControlOperatorControlAssignments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operatorControlName`<sup>Optional</sup> <a name="operatorControlName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.operatorControlName"></a>

```typescript
public readonly operatorControlName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#operator_control_name DataOciOperatorAccessControlOperatorControlAssignments#operator_control_name}.

---

##### `resourceName`<sup>Optional</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#resource_name DataOciOperatorAccessControlOperatorControlAssignments#resource_name}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#resource_type DataOciOperatorAccessControlOperatorControlAssignments#resource_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#state DataOciOperatorAccessControlOperatorControlAssignments#state}.

---

### DataOciOperatorAccessControlOperatorControlAssignmentsFilter <a name="DataOciOperatorAccessControlOperatorControlAssignmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlOperatorControlAssignments } from 'rhizo-co-terraform-provider-oci'

const dataOciOperatorAccessControlOperatorControlAssignmentsFilter: dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#name DataOciOperatorAccessControlOperatorControlAssignments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#values DataOciOperatorAccessControlOperatorControlAssignments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#regex DataOciOperatorAccessControlOperatorControlAssignments#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#name DataOciOperatorAccessControlOperatorControlAssignments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#values DataOciOperatorAccessControlOperatorControlAssignments#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#regex DataOciOperatorAccessControlOperatorControlAssignments#regex}.

---

### DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection <a name="DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlOperatorControlAssignments } from 'rhizo-co-terraform-provider-oci'

const dataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection: dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection = { ... }
```


### DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems <a name="DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlOperatorControlAssignments } from 'rhizo-co-terraform-provider-oci'

const dataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems: dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOperatorAccessControlOperatorControlAssignmentsFilterList <a name="DataOciOperatorAccessControlOperatorControlAssignmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlOperatorControlAssignments } from 'rhizo-co-terraform-provider-oci'

new dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.get"></a>

```typescript
public get(index: number): DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter">DataOciOperatorAccessControlOperatorControlAssignmentsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOperatorAccessControlOperatorControlAssignmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter">DataOciOperatorAccessControlOperatorControlAssignmentsFilter</a>[]

---


### DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference <a name="DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlOperatorControlAssignments } from 'rhizo-co-terraform-provider-oci'

new dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter">DataOciOperatorAccessControlOperatorControlAssignmentsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOperatorAccessControlOperatorControlAssignmentsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter">DataOciOperatorAccessControlOperatorControlAssignmentsFilter</a>

---


### DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList <a name="DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlOperatorControlAssignments } from 'rhizo-co-terraform-provider-oci'

new dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference <a name="DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlOperatorControlAssignments } from 'rhizo-co-terraform-provider-oci'

new dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.assignerId">assignerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.detachmentDescription">detachmentDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.errorCode">errorCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.isAutoApproveDuringMaintenance">isAutoApproveDuringMaintenance</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.isDefaultAssignment">isDefaultAssignment</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.isEnforcedAlways">isEnforcedAlways</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.isHypervisorLogForwarded">isHypervisorLogForwarded</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.isLogForwarded">isLogForwarded</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.opControlName">opControlName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.operatorControlId">operatorControlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.remoteSyslogServerAddress">remoteSyslogServerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.remoteSyslogServerCaCert">remoteSyslogServerCaCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.remoteSyslogServerPort">remoteSyslogServerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.resourceCompartmentId">resourceCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.timeAssignmentFrom">timeAssignmentFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.timeAssignmentTo">timeAssignmentTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.timeOfAssignment">timeOfAssignment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.timeOfDeletion">timeOfDeletion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.unassignerId">unassignerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.validateAssignmentTrigger">validateAssignmentTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems">DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assignerId`<sup>Required</sup> <a name="assignerId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.assignerId"></a>

```typescript
public readonly assignerId: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `detachmentDescription`<sup>Required</sup> <a name="detachmentDescription" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.detachmentDescription"></a>

```typescript
public readonly detachmentDescription: string;
```

- *Type:* string

---

##### `errorCode`<sup>Required</sup> <a name="errorCode" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.errorCode"></a>

```typescript
public readonly errorCode: number;
```

- *Type:* number

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isAutoApproveDuringMaintenance`<sup>Required</sup> <a name="isAutoApproveDuringMaintenance" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.isAutoApproveDuringMaintenance"></a>

```typescript
public readonly isAutoApproveDuringMaintenance: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isDefaultAssignment`<sup>Required</sup> <a name="isDefaultAssignment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.isDefaultAssignment"></a>

```typescript
public readonly isDefaultAssignment: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isEnforcedAlways`<sup>Required</sup> <a name="isEnforcedAlways" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.isEnforcedAlways"></a>

```typescript
public readonly isEnforcedAlways: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isHypervisorLogForwarded`<sup>Required</sup> <a name="isHypervisorLogForwarded" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.isHypervisorLogForwarded"></a>

```typescript
public readonly isHypervisorLogForwarded: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isLogForwarded`<sup>Required</sup> <a name="isLogForwarded" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.isLogForwarded"></a>

```typescript
public readonly isLogForwarded: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `opControlName`<sup>Required</sup> <a name="opControlName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.opControlName"></a>

```typescript
public readonly opControlName: string;
```

- *Type:* string

---

##### `operatorControlId`<sup>Required</sup> <a name="operatorControlId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.operatorControlId"></a>

```typescript
public readonly operatorControlId: string;
```

- *Type:* string

---

##### `remoteSyslogServerAddress`<sup>Required</sup> <a name="remoteSyslogServerAddress" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.remoteSyslogServerAddress"></a>

```typescript
public readonly remoteSyslogServerAddress: string;
```

- *Type:* string

---

##### `remoteSyslogServerCaCert`<sup>Required</sup> <a name="remoteSyslogServerCaCert" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.remoteSyslogServerCaCert"></a>

```typescript
public readonly remoteSyslogServerCaCert: string;
```

- *Type:* string

---

##### `remoteSyslogServerPort`<sup>Required</sup> <a name="remoteSyslogServerPort" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.remoteSyslogServerPort"></a>

```typescript
public readonly remoteSyslogServerPort: number;
```

- *Type:* number

---

##### `resourceCompartmentId`<sup>Required</sup> <a name="resourceCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.resourceCompartmentId"></a>

```typescript
public readonly resourceCompartmentId: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeAssignmentFrom`<sup>Required</sup> <a name="timeAssignmentFrom" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.timeAssignmentFrom"></a>

```typescript
public readonly timeAssignmentFrom: string;
```

- *Type:* string

---

##### `timeAssignmentTo`<sup>Required</sup> <a name="timeAssignmentTo" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.timeAssignmentTo"></a>

```typescript
public readonly timeAssignmentTo: string;
```

- *Type:* string

---

##### `timeOfAssignment`<sup>Required</sup> <a name="timeOfAssignment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.timeOfAssignment"></a>

```typescript
public readonly timeOfAssignment: string;
```

- *Type:* string

---

##### `timeOfDeletion`<sup>Required</sup> <a name="timeOfDeletion" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.timeOfDeletion"></a>

```typescript
public readonly timeOfDeletion: string;
```

- *Type:* string

---

##### `unassignerId`<sup>Required</sup> <a name="unassignerId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.unassignerId"></a>

```typescript
public readonly unassignerId: string;
```

- *Type:* string

---

##### `validateAssignmentTrigger`<sup>Required</sup> <a name="validateAssignmentTrigger" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.validateAssignmentTrigger"></a>

```typescript
public readonly validateAssignmentTrigger: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems">DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems</a>

---


### DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList <a name="DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlOperatorControlAssignments } from 'rhizo-co-terraform-provider-oci'

new dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.get"></a>

```typescript
public get(index: number): DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference <a name="DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlOperatorControlAssignments } from 'rhizo-co-terraform-provider-oci'

new dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList">DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection">DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList">DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection">DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection</a>

---



