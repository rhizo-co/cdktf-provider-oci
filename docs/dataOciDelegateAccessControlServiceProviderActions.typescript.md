# `dataOciDelegateAccessControlServiceProviderActions` Submodule <a name="`dataOciDelegateAccessControlServiceProviderActions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDelegateAccessControlServiceProviderActions <a name="DataOciDelegateAccessControlServiceProviderActions" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_provider_actions oci_delegate_access_control_service_provider_actions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.Initializer"></a>

```typescript
import { dataOciDelegateAccessControlServiceProviderActions } from 'rhizo-co-terraform-provider-oci'

new dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions(scope: Construct, id: string, config: DataOciDelegateAccessControlServiceProviderActionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsConfig">DataOciDelegateAccessControlServiceProviderActionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsConfig">DataOciDelegateAccessControlServiceProviderActionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.resetServiceProviderServiceType">resetServiceProviderServiceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDelegateAccessControlServiceProviderActionsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilter">DataOciDelegateAccessControlServiceProviderActionsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.resetName"></a>

```typescript
public resetName(): void
```

##### `resetResourceType` <a name="resetResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.resetResourceType"></a>

```typescript
public resetResourceType(): void
```

##### `resetServiceProviderServiceType` <a name="resetServiceProviderServiceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.resetServiceProviderServiceType"></a>

```typescript
public resetServiceProviderServiceType(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDelegateAccessControlServiceProviderActions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.isConstruct"></a>

```typescript
import { dataOciDelegateAccessControlServiceProviderActions } from 'rhizo-co-terraform-provider-oci'

dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.isTerraformElement"></a>

```typescript
import { dataOciDelegateAccessControlServiceProviderActions } from 'rhizo-co-terraform-provider-oci'

dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.isTerraformDataSource"></a>

```typescript
import { dataOciDelegateAccessControlServiceProviderActions } from 'rhizo-co-terraform-provider-oci'

dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.generateConfigForImport"></a>

```typescript
import { dataOciDelegateAccessControlServiceProviderActions } from 'rhizo-co-terraform-provider-oci'

dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDelegateAccessControlServiceProviderActions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDelegateAccessControlServiceProviderActions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDelegateAccessControlServiceProviderActions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_provider_actions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDelegateAccessControlServiceProviderActions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterList">DataOciDelegateAccessControlServiceProviderActionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.serviceProviderActionSummaryCollection">serviceProviderActionSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionList">DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilter">DataOciDelegateAccessControlServiceProviderActionsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.serviceProviderServiceTypeInput">serviceProviderServiceTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.serviceProviderServiceType">serviceProviderServiceType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.filter"></a>

```typescript
public readonly filter: DataOciDelegateAccessControlServiceProviderActionsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterList">DataOciDelegateAccessControlServiceProviderActionsFilterList</a>

---

##### `serviceProviderActionSummaryCollection`<sup>Required</sup> <a name="serviceProviderActionSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.serviceProviderActionSummaryCollection"></a>

```typescript
public readonly serviceProviderActionSummaryCollection: DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionList">DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDelegateAccessControlServiceProviderActionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilter">DataOciDelegateAccessControlServiceProviderActionsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `serviceProviderServiceTypeInput`<sup>Optional</sup> <a name="serviceProviderServiceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.serviceProviderServiceTypeInput"></a>

```typescript
public readonly serviceProviderServiceTypeInput: string[];
```

- *Type:* string[]

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `serviceProviderServiceType`<sup>Required</sup> <a name="serviceProviderServiceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.serviceProviderServiceType"></a>

```typescript
public readonly serviceProviderServiceType: string[];
```

- *Type:* string[]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDelegateAccessControlServiceProviderActionsConfig <a name="DataOciDelegateAccessControlServiceProviderActionsConfig" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsConfig.Initializer"></a>

```typescript
import { dataOciDelegateAccessControlServiceProviderActions } from 'rhizo-co-terraform-provider-oci'

const dataOciDelegateAccessControlServiceProviderActionsConfig: dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_provider_actions#compartment_id DataOciDelegateAccessControlServiceProviderActions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilter">DataOciDelegateAccessControlServiceProviderActionsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_provider_actions#id DataOciDelegateAccessControlServiceProviderActions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_provider_actions#name DataOciDelegateAccessControlServiceProviderActions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsConfig.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_provider_actions#resource_type DataOciDelegateAccessControlServiceProviderActions#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsConfig.property.serviceProviderServiceType">serviceProviderServiceType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_provider_actions#service_provider_service_type DataOciDelegateAccessControlServiceProviderActions#service_provider_service_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_provider_actions#state DataOciDelegateAccessControlServiceProviderActions#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_provider_actions#compartment_id DataOciDelegateAccessControlServiceProviderActions#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDelegateAccessControlServiceProviderActionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilter">DataOciDelegateAccessControlServiceProviderActionsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_provider_actions#filter DataOciDelegateAccessControlServiceProviderActions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_provider_actions#id DataOciDelegateAccessControlServiceProviderActions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_provider_actions#name DataOciDelegateAccessControlServiceProviderActions#name}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsConfig.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_provider_actions#resource_type DataOciDelegateAccessControlServiceProviderActions#resource_type}.

---

##### `serviceProviderServiceType`<sup>Optional</sup> <a name="serviceProviderServiceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsConfig.property.serviceProviderServiceType"></a>

```typescript
public readonly serviceProviderServiceType: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_provider_actions#service_provider_service_type DataOciDelegateAccessControlServiceProviderActions#service_provider_service_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_provider_actions#state DataOciDelegateAccessControlServiceProviderActions#state}.

---

### DataOciDelegateAccessControlServiceProviderActionsFilter <a name="DataOciDelegateAccessControlServiceProviderActionsFilter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilter.Initializer"></a>

```typescript
import { dataOciDelegateAccessControlServiceProviderActions } from 'rhizo-co-terraform-provider-oci'

const dataOciDelegateAccessControlServiceProviderActionsFilter: dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_provider_actions#name DataOciDelegateAccessControlServiceProviderActions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_provider_actions#values DataOciDelegateAccessControlServiceProviderActions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_provider_actions#regex DataOciDelegateAccessControlServiceProviderActions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_provider_actions#name DataOciDelegateAccessControlServiceProviderActions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_provider_actions#values DataOciDelegateAccessControlServiceProviderActions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_provider_actions#regex DataOciDelegateAccessControlServiceProviderActions#regex}.

---

### DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollection <a name="DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollection.Initializer"></a>

```typescript
import { dataOciDelegateAccessControlServiceProviderActions } from 'rhizo-co-terraform-provider-oci'

const dataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollection: dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollection = { ... }
```


### DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItems <a name="DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItems.Initializer"></a>

```typescript
import { dataOciDelegateAccessControlServiceProviderActions } from 'rhizo-co-terraform-provider-oci'

const dataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItems: dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItems = { ... }
```


### DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsProperties <a name="DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsProperties" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsProperties.Initializer"></a>

```typescript
import { dataOciDelegateAccessControlServiceProviderActions } from 'rhizo-co-terraform-provider-oci'

const dataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsProperties: dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsProperties = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDelegateAccessControlServiceProviderActionsFilterList <a name="DataOciDelegateAccessControlServiceProviderActionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterList.Initializer"></a>

```typescript
import { dataOciDelegateAccessControlServiceProviderActions } from 'rhizo-co-terraform-provider-oci'

new dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterList.get"></a>

```typescript
public get(index: number): DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilter">DataOciDelegateAccessControlServiceProviderActionsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDelegateAccessControlServiceProviderActionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilter">DataOciDelegateAccessControlServiceProviderActionsFilter</a>[]

---


### DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference <a name="DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDelegateAccessControlServiceProviderActions } from 'rhizo-co-terraform-provider-oci'

new dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilter">DataOciDelegateAccessControlServiceProviderActionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDelegateAccessControlServiceProviderActionsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsFilter">DataOciDelegateAccessControlServiceProviderActionsFilter</a>

---


### DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsList <a name="DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDelegateAccessControlServiceProviderActions } from 'rhizo-co-terraform-provider-oci'

new dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference <a name="DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDelegateAccessControlServiceProviderActions } from 'rhizo-co-terraform-provider-oci'

new dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.property.component">component</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.property.customerDisplayName">customerDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.property.properties">properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesList">DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.property.serviceProviderServiceTypes">serviceProviderServiceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItems">DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `component`<sup>Required</sup> <a name="component" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.property.component"></a>

```typescript
public readonly component: string;
```

- *Type:* string

---

##### `customerDisplayName`<sup>Required</sup> <a name="customerDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.property.customerDisplayName"></a>

```typescript
public readonly customerDisplayName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.property.properties"></a>

```typescript
public readonly properties: DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesList">DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesList</a>

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `serviceProviderServiceTypes`<sup>Required</sup> <a name="serviceProviderServiceTypes" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.property.serviceProviderServiceTypes"></a>

```typescript
public readonly serviceProviderServiceTypes: string[];
```

- *Type:* string[]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItems">DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItems</a>

---


### DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesList <a name="DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesList.Initializer"></a>

```typescript
import { dataOciDelegateAccessControlServiceProviderActions } from 'rhizo-co-terraform-provider-oci'

new dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesList.get"></a>

```typescript
public get(index: number): DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference <a name="DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.Initializer"></a>

```typescript
import { dataOciDelegateAccessControlServiceProviderActions } from 'rhizo-co-terraform-provider-oci'

new dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsProperties">DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsProperties;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsProperties">DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsProperties</a>

---


### DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionList <a name="DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionList.Initializer"></a>

```typescript
import { dataOciDelegateAccessControlServiceProviderActions } from 'rhizo-co-terraform-provider-oci'

new dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionList.get"></a>

```typescript
public get(index: number): DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference <a name="DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDelegateAccessControlServiceProviderActions } from 'rhizo-co-terraform-provider-oci'

new dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsList">DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollection">DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsList">DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderActions.DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollection">DataOciDelegateAccessControlServiceProviderActionsServiceProviderActionSummaryCollection</a>

---



